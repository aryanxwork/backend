const express = require("express");
const app = express();
let port = 8080;
const path = require("path")

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home");
})
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    let igData = require("/data.json");
    let data = igData[username];
    res.render("insta", { data });
});