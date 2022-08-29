const productService = require("../services/ProductService.js");

exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json({ data: products, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.createProduct = async (req, res) => {
    try {
        product = await productService.createProduct(req.body);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.getProductById = async (req, res) => {
    try {
        product = await productService.getProductById(req.body);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.updateProduct = async (req, res) => {
    try {
        product = await productService.updateProduct(req.body, req.param.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        product = await productService.deleteProduct(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.getAllProductsOnCategoryName = async (req, res) => {
    try {
        const products = await productService.getProductBasedOnCategoryName(req.params.categoryName);
        res.json({ data: products, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.getAllProductsOnCategoryTypes = async (req, res) => {
    try {
        const products = await productService.getAllProductsWithCategory();
        res.json({ data: products, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



