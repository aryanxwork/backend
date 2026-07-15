const express = require("express");
const app = express();



let port = 3000;

app.listen(port, () => {
    console.log(`App is running on port number ${port}`);
});

app.use((req, res) => {
    console.log("Request received");
    res.send("Here is the response");
});