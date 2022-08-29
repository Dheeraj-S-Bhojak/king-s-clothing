const ProductModel = require("../Models/products.js");

exports.getAllProducts = async () => {
    return await ProductModel.find();
};

exports.createProduct = async (Product) => {
    return await ProductModel.create(Product);
};

exports.getProductById = async (id) => {
    return await ProductModel.findById(id);
};

exports.updateProduct = async (id, Product) => {
    return await ProductModel.findByIdAndUpdate(id, Product);
};

exports.deleteProduct = async (id) => { 
    return await ProductModel.findByIdAndDelete(id);
};
exports.getProductBasedOnCategoryName = async (categoryName) => {
    return await ProductModel.find({ productCategory: categoryName });
};

exports.getAllProductsWithCategory = async () => {
    return await ProductModel.aggregate([
        { $sort: { date: -1 } },
        {
            $group: {
                _id: "$productCategory",
                items: { $push: "$$ROOT" },
            },
        },
        {
            $project: {
                items: { $slice: ["$items", 4] },
            },
        },
    ]);
};