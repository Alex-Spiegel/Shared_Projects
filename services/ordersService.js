const { client } = require("../config/db-client");
const { ObjectId } = require("mongodb");

// POST /orders - Create a new order
exports.createNewOrder = async (body) => {
  const db = client.db("ecommerce");
  const collection = db.collection("orders");

  const result = await collection.insertOne(body);
  return result;
};

// GET /orders - Get all orders
exports.getAllOrders = async () => {
  const db = client.db("ecommerce");
  const collection = db.collection("orders");

  const allOrders = await collection.find().toArray();
  return allOrders;
};

// GET /orders/:id - Get a speciﬁc order by ID
exports.getOrderById = async (id) => {
  const db = client.db("ecommerce");
  const collection = db.collection("orders");

  const orderId = new ObjectId(id); // Die übergebene id wird hier in eine ObjectID-Instanz umgewandelt. Denn Mongo speichert seine IDs im ObjectID-Format. Nur so können wir nachher gescheit danach suchen.
  const result = await collection.findOne({ _id: orderId }); // Wir verwenden findOne, um in der orders-Collection nach dem Dokument zu suchen, das die angegebene orderId als _id-Wert hat.
  return result;
};

// PUT /orders/:id - Update an order by ID
exports.updateOrderById = async (id, updateData) => {
  const db = client.db("ecommerce");
  const collection = db.collection("orders");

  return collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
};

// DELETE /orders/:id - Delete an order by ID
exports.deleteOrderById = async (id) => {
  const db = client.db("ecommerce");
  const collection = db.collection("orders");

  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result;
};
