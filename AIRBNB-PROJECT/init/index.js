const mongoose = require('mongoose');
const data = require("./data.js");
const Listing = require("../models/listing.js");

const mongoDB_URL = "mongodb://127.0.0.1:27017/airbnb";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(mongoDB_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(data.data);
    console.log("Database initialized with sample data");
};

initDB();