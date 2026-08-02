const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://pngtree.com/free-png-vectors/picture-icons",
        set: (image) => image === "" ? "https://pngtree.com/free-png-vectors/picture-icons" : image,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;