const ordersService = require("../services/ordersService");

// POST /orders - Create a new order

exports.createNewOrder = async (req, res) => {
  try {
    const result = await ordersService.createNewOrder(req.body);
    res.status(201).json(result);
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
      res.json({
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
    res.status(200).json({
      message: `Your order with the ID ${req.params.id} has been updated!`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /orders/:id - Delete an order by ID
exports.deleteOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ordersService.deleteOrderById(id);
    res
      .status(200)
      .json({ message: `Your order with the ID ${id} has been deleted!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
