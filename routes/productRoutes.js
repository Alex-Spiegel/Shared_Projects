const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// POST /products - Create a new product
router.post("/", productController.createNewProduct);

// GET /products - Get all products
router.get("/", productController.getAllProducts);

// GET /products/:id - Get a speciﬁc product by ID
router.get("/:id", productController.getProductById);

// PUT /products/:id - Update a product by ID
router.put("/:id", productController.updateProductById);

// DELETE /products/:id - Delete a product by ID
router.delete("/:id", productController.deleteProductById);

module.exports = router;
