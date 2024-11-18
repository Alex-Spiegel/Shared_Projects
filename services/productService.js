// const { client } = require("../config/db-client"); // This is MongoDB stuff
// const { ObjectId } = require("mongodb"); // This is MongoDB stuff
const productModel = require("../models/productSchema.js");

//==================================================
// POST /products - Create a new produt
//==================================================
exports.createNewProduct = async (body) => {
  const product = await productModel.create(body);
  return product;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("products");
  // const result = await collection.insertOne(body);
  // return result;
};

//==================================================
// GET /products - Get all products
//==================================================
exports.getAllProducts = async () => {
  const courses = await productModel.find();
  return courses;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("products");

  // const allProducts = await collection.find().toArray();
  // return allProducts;
};

//==================================================
// GET /products/:id - Get a speciﬁc product by ID
//==================================================
exports.getProductById = async (id) => {
  const product = await productModel.findById(id); //findById() is a method die nur MongoDB IDs nimmt
  return product;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("products");

  // const product = new ObjectId(id);
  // const result = await collection.findOne({ _id: product });
  // return result;
};

//==================================================
// PUT /products/:id - Update a product by ID
//==================================================
exports.updateProductById = async (id, updateData) => {
  const updatedProduct = await productModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updatedProduct;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("products");
  // return collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
};

//==================================================
// DELETE /products/:id - Delete a product by ID
//==================================================
exports.deleteProductById = async (id) => {
  const deletedProduct = await productModel.findByIdAndDelete(id);
  return deletedProduct;
  // == BELOW --> MongoDB syntax
  // const db = client.db("ecommerce");
  // const collection = db.collection("products");
  // return collection.deleteOne({ _id: new ObjectId(id) });
};
