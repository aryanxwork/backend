const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

app.use(express.urlencoded({ extended: true }));


let posts = [
    {
        username: "aryansharma",
        content: "what a lovely day",
    },
    {
        username: "fifaworldcup",
        content: "spain champions of worldcup",
    },
    {
        username: "rockstargames",
        content: "gta 6 will be launched tomorrow",
    },
    {
        username: "wwe",
        content: "summerslam 2026 tickets live",
    },

];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.use(express.static(path.join(__dirname, "public")));



app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Server Working");
});
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
});
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
})