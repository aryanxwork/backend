const express = require("express");
const app = express();
const port = 8080;



app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
    res.send("Standard GET Response");
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Welcome @${user}`);
});


app.listen(port, () => {
    console.log(`App Running on Port ${port}`);
});
