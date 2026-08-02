const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const port = 8080;

//connect to MongoDB

mongoDB_URL = "mongodb://127.0.0.1:27017/airbnb";
main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
async function main() {
    await mongoose.connect(mongoDB_URL);
}


//check
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//home route
app.get("/", (req, res) => {
    res.send("Welcome to the Airbnb Project API");
});

//sample
app.get("/testListing", async (req, res) => {
    let listing = new Listing({
        title: "Sample Listing",
        description: "This is a sample listing for testing purposes.",
        image: "",
        price: 100,
        location: "Sample Location",
        country: "Sample Country"
    });

    await listing.save();
    res.send("Sample listing saved to the database.");
});