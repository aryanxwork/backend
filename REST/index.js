const express = require("express");
const app = express();
const port = 8080;
const { v4: uuidv4 } = require("uuid");

const path = require("path");

app.use(express.urlencoded({ extended: true }));


let posts = [
    {
        id: uuidv4(),
        username: "aryansharma",
        content: "what a lovely day",
    },
    {
        id: uuidv4(),
        username: "fifaworldcup",
        content: "spain champions of worldcup",
    },
    {
        id: uuidv4(),
        username: "rockstargames",
        content: "gta 6 will be launched tomorrow",
    },
    {
        id: uuidv4(),
        username: "wwe",
        content: "summerslam 2026 tickets live",
    }
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
    posts.push({ id, username, content });
    res.redirect("/posts");
})
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;

})

app.get("/posts/:id/edit", (req, res) => {
    let id = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs");
});