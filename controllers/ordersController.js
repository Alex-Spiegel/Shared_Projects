const ordersService = require("../services/ordersService");

// POST /orders - Create a new order
exports.createNewOrder = async (req, res) => {
  try {
    const result = await ordersService.createNewOrder(req.body);
    res.status(201).json({
      message: "Your order has been posted successfully!",
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /orders - Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await ordersService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /orders/:id - Get a speciﬁc order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await ordersService.getOrderById(req.params.id);

    if (order) {
      res.status(200).json({
        message: "Here is your order!",
        order: order,
      });
    } else {
      res.status(404).json({ message: "Order not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT /orders/:id - Update an order by ID
exports.updateOrderById = async (req, res) => {
  try {
    const result = await ordersService.updateOrderById(req.params.id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Order not found!" });
    }

    res.status(200).json({
      message: `Your order with the ID ${req.params.id} has been updated!`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /orders/add/:orderId/:productId - Add a product to an order
exports.addProductToOrder = async (req, res) => {
  try {
    const { orderId, productId } = req.params;
    const updatedOrder = await ordersService.addProductToOrder(
      orderId,
      productId
    );

    if (updatedOrder) {
      res.status(200).json({
        message: "Product has been added to Order",
        updatedOrder: updatedOrder,
      });
    } else {
      res.status(404).json({ message: "Order or product not found." });
      // res.status(404).send("Order or product not found."); das hier geht auch stattdessen
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /orders/:id - Delete an order by ID
exports.deleteOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ordersService.deleteOrderById(id);

    if (!result) {
      return res.status(404).json({ message: "Order not found!" });
    }

    res
      .status(200)
      .json({ message: `Your order with the ID ${id} has been deleted!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
