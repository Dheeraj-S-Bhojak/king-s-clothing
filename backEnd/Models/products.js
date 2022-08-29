const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    productCategory: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },

    description:
    {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true});

module.exports = mongoose.model("products", productsSchema);

