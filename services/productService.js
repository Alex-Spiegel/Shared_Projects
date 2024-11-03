const { client } = require("../config/db-client");
const { ObjectId } = require("mongodb");

// POST /products - Create a new produt
exports.createNewProduct = async (body) => {
  const db = client.db("ecommerce");
  const collection = db.collection("products");

  const result = await collection.insertOne(body);
  return result;
};

// GET /products - Get all products
exports.getAllProducts = async () => {
  const db = client.db("ecommerce");
  const collection = db.collection("products");

  const allProducts = await collection.find().toArray();
  return allProducts;
};

// GET /products/:id - Get a speciﬁc product by ID
exports.getProductById = async (furz) => {
  const db = client.db("ecommerce");
  const collection = db.collection("products");

  const product = new ObjectId(furz);
  const result = await collection.findOne({ _id: product });
  return result;
};

// PUT /products/:id - Update a product by ID
exports.updateProductById = async (id, updateData) => {
  const db = client.db("ecommerce");
  const collection = db.collection("products");

  return collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
};

// DELETE /products/:id - Delete a product by ID
exports.deleteProductById = async (id) => {
  const db = client.db("ecommerce");
  const collection = db.collection("products");

  return collection.deleteOne({ _id: new ObjectId(id) });
};
