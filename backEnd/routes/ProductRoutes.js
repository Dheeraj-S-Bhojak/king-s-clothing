const express = require("express");
const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getAllProductsOnCategoryName,
    getAllProductsOnCategoryTypes
} = require("../controllers/ProductController.js");

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);
router.route("/shop/:categoryName").get(getAllProductsOnCategoryName);
router.route("/all/shop").get(getAllProductsOnCategoryTypes);

    
module.exports = router;