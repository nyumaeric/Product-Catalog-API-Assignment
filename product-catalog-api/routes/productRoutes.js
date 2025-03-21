const express = require('express');
const productController = require('../controllers/productController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, productController.createProduct);  // Protect the route
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', protect, productController.updateProduct);  // Protect the route
router.delete('/:id', protect, productController.deleteProduct);  // Protect the route

module.exports = router;
