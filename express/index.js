const express = require("express");
const app = express();



let port = 3000;

app.listen(port, () => {
    console.log(`App is running on port number ${port}`);
});

app.get("/", (req, res) => {
    res.send("Contacted Root -> Path");
});
app.get("/search", (req, res) => {
    res.send("Contacted Search Path");
});
app.get("/game", (req, res) => {
    res.send("Contacted Game Path");
});
app.get('*any', (req, res) => {
    res.send("ERROR : Unidentified Path");
});