// const { client } = require("../config/db-client"); // This is MongoDB stuff
// const { ObjectId } = require("mongodb"); // This is MongoDB stuff
const { Router } = require("express");
const ordersModel = require("../models/ordersSchema");
const productModel = require("../models/productSchema.js");

//==================================================
// POST /orders - Create a new produt
//==================================================
exports.createNewOrder = async (body) => {
  const order = await ordersModel.create(body);
  return order;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("orders");
  // const result = await collection.insertOne(body);
  // return result;
};

//==================================================
// GET /orders - Get all orders
//==================================================
exports.getAllOrders = async () => {
  const orders = await ordersModel.find().populate({
    path: "products",
    select: "_id Produktname Preis",
  });
  return orders;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("orders");
  // const allOrders = await collection.find().toArray();
  // return allOrders;
};

//==================================================
// GET /orders/:id - Get a speciﬁc order by ID
//==================================================
exports.getOrderById = async (id) => {
  const orders = await ordersModel.findById(id).populate({
    path: "products",
    select: "_id Produktname Preis",
  });
  return orders;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("orders");
  // const orderId = new ObjectId(id); // Die übergebene id wird hier in eine ObjectID-Instanz umgewandelt. Denn Mongo speichert seine IDs im ObjectID-Format. Nur so können wir nachher gescheit danach suchen.
  // const result = await collection.findOne({ _id: orderId }); // Wir verwenden findOne, um in der orders-Collection nach dem Dokument zu suchen, das die angegebene orderId als _id-Wert hat.
  // return result;
};

//==================================================
// PUT /orders/:id - Update an order by ID
//==================================================
exports.updateOrderById = async (id, updateData) => {
  const updatedOrder = await ordersModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updatedOrder;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("orders");
  // return collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
};

//==================================================
// PUT /orders/add/:orderId/:productId - Add a product to an order
//==================================================
exports.addProductToOrder = async (orderId, productId) => {
  const order = await ordersModel.findById(orderId);
  const product = await productModel.findById(productId);

  if (order && product) {
    const updatedOrder = await ordersModel.findByIdAndUpdate(
      order._id,
      { $push: { products: [product._id] } },
      { new: true }
    );
    return updatedOrder;
  }
  return null;
};

//==================================================
// DELETE /orders/:id - Delete an order by ID
//==================================================
exports.deleteOrderById = async (id) => {
  const deletedOrder = await ordersModel.findByIdAndDelete(id);
  return deletedOrder;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("orders");
  // const result = await collection.deleteOne({ _id: new ObjectId(id) });
  // return result;
};
