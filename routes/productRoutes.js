const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//==================================================
// POST /products - Create a new product
//==================================================
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Creates a new product in the system with product details
 *     responses:
 *       201:
 *         description: Product has been created successfully
 *       400:
 *         description: Invalid input, missing required fields
 *       500:
 *         description: Server error
 */
router.post("/", productController.createNewProduct);

//==================================================
// GET /products - Get all products
//==================================================
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Fetches a list of all available products
 *     responses:
 *       200:
 *         description: A list of all products in JSON format
 *       500:
 *         description: Server error
 */
router.get("/", productController.getAllProducts);

//==================================================
// GET /products/:id - Get a specific product by ID
//==================================================
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a specific product by ID
 *     description: Fetches a single product by its MongoDB _id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to fetch
 *     responses:
 *       200:
 *         description: A JSON object with the product details
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.get("/:id", productController.getProductById);

//==================================================
// PUT /products/:id - Update a product by ID
//==================================================
/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     description: Updates the details of an existing product by its MongoDB _id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to update
 *       - in: body
 *         name: product
 *         required: true
 *         schema:
 *           type: object
 *         description: The updated product details
 *     responses:
 *       200:
 *         description: The updated product details
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.put("/:id", productController.updateProductById);

//==================================================
// DELETE /products/:id - Delete a product by ID
//==================================================
/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Deletes a product based on its MongoDB _id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", productController.deleteProductById);

module.exports = router;
