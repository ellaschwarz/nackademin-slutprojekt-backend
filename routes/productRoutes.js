const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//get all products
router.get("/", productController.getAllProducts);

//get product with given ID
router.get("/:productId", productController.getProduct);

//post a new product (only admin)
router.post("/", productController.createProduct);

//update a product with given ID (only admin)
router.patch("/:productId", productController.updateProduct);

//Delete a product with given ID (only admin)
router.delete("/:productId", productController.deleteProduct);

module.exports = router;