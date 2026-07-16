const express = require("express");
const app = express();



let port = 3000;

app.listen(port, () => {
    console.log(`App is running on port number ${port}`);
});

app.get("/", (req, res) => {
    res.send("Root Directory");
});
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.send(`Results for @${username}`);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("Empty Query!")
    }
    res.send(`Results for @${q}`);
});
