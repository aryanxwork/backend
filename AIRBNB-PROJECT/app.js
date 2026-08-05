const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

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

// //sample
// app.get("/testListing", async (req, res) => {
//     let listing = new Listing({
//         title: "Sample Listing",
//         description: "This is a sample listing for testing purposes.",
//         image: "",
//         price: 100,
//         location: "Sample Location",
//         country: "Sample Country"
//     });

//     await listing.save();
//     res.send("Sample listing saved to the database.");
// });

app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
})


app.get("/listings/new", (req, res) => {
    res.render("listings/new");

});

app.post("/listings", async (req, res) => {
    const { title, description, price, location, country, filename, image } = req.body;
    const newListing = new Listing({
        title: title,
        description: description,
        price: price,
        location: location,
        country: country,
        image: {
            filename: filename,
            url: image
        }
    });
    await newListing.save();
    res.redirect("/listings");

});
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
});

app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const { title, description, price, location, country, filename, image } = req.body;
    await Listing.findByIdAndUpdate(id, {
        title: title,
        description: description,
        price: price,
        location: location,
        country: country,
        image: {
            filename: filename,
            url: image
        }
    });
    res.redirect(`/listings/${id}`);
});

app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
});