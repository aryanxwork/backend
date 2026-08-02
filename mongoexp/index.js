const express = require("express");
const app = express();

const path = require("path");
const mongoose = require("mongoose");

const port = 8080;

const Chat = require("./models/chat.js");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));




main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Home Directory");
});

//INDEX ROUTE
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
})

// CREATE
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

//post
app.post("/chats", (req, res) => {
    let { from, to, message } = req.body;
    let chat1 = new Chat({
        from: from,
        to: to,
        message: message,
        created: new Date()
    });
    chat1.save().then((res) => {
        console.log("New Post created");
    }).catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});