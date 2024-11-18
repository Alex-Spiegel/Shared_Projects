const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

//==================================================
// POST /orders - Create a new order
//==================================================
/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     description: Creates a new order in the system with customer and product details
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post("/", ordersController.createNewOrder);

//==================================================
// GET /orders - Get all orders
//==================================================
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     description: Fetches a list of all orders
 *     responses:
 *       200:
 *         description: A JSON array of all orders
 *       500:
 *         description: Server error
 */
router.get("/", ordersController.getAllOrders);

//==================================================
// GET /orders/:id - Get a speciﬁc order by ID
//==================================================
/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     description: Fetches a single order in JSON format using the MongoDB _id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the order to fetch
 *     responses:
 *       200:
 *         description: A JSON object with the order details
 *       404:
 *         description: Error - Order not found
 *       500:
 *         description: Server error
 */
router.get("/:id", ordersController.getOrderById);

//==================================================
// PUT /orders/:id - Update an order by ID
//==================================================
/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an order by ID
 *     description: Updates an existing order using its MongoDB _ID and the data provided
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the order to update
 *       - in: body
 *         name: body
 *         required: true
 *         description: The data for the order to update
 *     responses:
 *       200:
 *         description: Order has been successfully updated
 *       404:
 *         description: Order not found
 *       500:
 *         description: Server error
 */
router.put("/:id", ordersController.updateOrderById);

//==================================================
// PUT /orders/add/:orderId/:productId - Add a product to an order
//==================================================
/**
 * @swagger
 * /orders/add/{orderId}/{productId}:
 *   put:
 *     summary: Add a product to an order
 *     description: Adds a product to an existing order using the order ID and product ID.
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the order TO WHICH the product should be added
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of THE PRODUCT to add to the order
 *     responses:
 *       200:
 *         description: Product has been successfully added to the order
 *       404:
 *         description: Error - Order or product not found
 *       500:
 *         description: Server error
 */
router.put("/add/:orderId/:productId", ordersController.addProductToOrder);

//==================================================
// DELETE /orders/:id - Delete an order by ID
//==================================================
/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     description: Delete a single order using its MongoDB _id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the order to delete
 *     responses:
 *       200:
 *         description: Order has been successfully deleted
 *       404:
 *         description: Error - Order not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", ordersController.deleteOrderById);

module.exports = router;
