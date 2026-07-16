const express = require("express");
const app = express();
let port = 8080;


app.set("view engine", "ejs");


app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home");
})