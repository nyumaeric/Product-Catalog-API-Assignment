const Product = require('../models/Product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
      const { name, description, category, minPrice, maxPrice, inStock } = req.query;
      
      const query = {};
  
      if (name) {
        query.name = { $regex: name, $options: 'i' };  // Case-insensitive search for name
      }
      if (description) {
        query.description = { $regex: description, $options: 'i' };
      }
      if (category) {
        query.category = category;  // Filter by category
      }
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = minPrice;  // Filter by minimum price
        if (maxPrice) query.price.$lte = maxPrice;  // Filter by maximum price
      }
      if (inStock) {
        query['variants.stock'] = { $gt: 0 };  // Filter by products that are in stock
      }
  
      const products = await Product.find(query).populate('category');
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('category');

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
