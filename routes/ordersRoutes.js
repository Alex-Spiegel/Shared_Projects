const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

// POST /orders - Create a new order
router.post("/", ordersController.createNewOrder);

// GET /orders - Get all orders
router.get("/", ordersController.getAllOrders);

// GET /orders/:id - Get a speciﬁc order by ID
router.get("/:id", ordersController.getOrderById);

// PUT /orders/:id - Update an order by ID
router.put("/:id", ordersController.updateOrderById);

// PUT /orders/add/:orderId/:productId - Add a product to an order
router.put("/add/:orderId/:productId", ordersController.addProductToOrder);

// DELETE /orders/:id - Delete an order by ID
router.delete("/:id", ordersController.deleteOrderById);

module.exports = router;
