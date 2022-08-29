
const categoryService = require("../services/CategoryService.js");
 
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json({ data: categories, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.createCategory = async (req, res) => {
    try {
        category = await categoryService.createCategory(req.body);
        res.json({ data: category, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        category = await categoryService.getCategoryById(req.params.id);
        res.json({ data: category, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateCategory = async (req, res) => {
    try {
        category = await categoryService.updateCategory(req.body, req.params.id);
        res.json({ data: category, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        category = await categoryService.deleteCategory(req.params.id);
        res.json({ data: category, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

