const productService = require("../services/productService");

// POST /products - Create a new product
exports.createNewProduct = async (req, res) => {
  try {
    const result = await productService.createNewProduct(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /products - Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /products/:id - Get a speciﬁc product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (product !== null && product !== undefined) {
      res.json({
        message: "Here is your product!",
        product: product,
      });
    } else {
      res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT /products/:id - Update a product by ID
exports.updateProductById = async (req, res) => {
  try {
    const result = await productService.updateProductById(
      req.params.id,
      req.body
    );
    res.status(200).json({ message: "Product has been updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /products/:id - Delete a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const result = await productService.deleteProductById(req.params.id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product has been deleted", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
