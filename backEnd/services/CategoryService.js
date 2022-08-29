const CategoryModel = require("../Models/categories.js");
 
exports.getAllCategories = async () => {
  return await CategoryModel.find();
};
 
exports.createCategory = async (Category) => {
  return await CategoryModel.create(Category);
};
exports.getCategoryById = async (id) => {
  return await CategoryModel.findById(id);
};
 
exports.updateCategory = async (id, Category) => {
  return await CategoryModel.findByIdAndUpdate(id, Category);
};
 
exports.deleteCategory = async (id) => {
  return await CategoryModel.findByIdAndDelete(id);
};


