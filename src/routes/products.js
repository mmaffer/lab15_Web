const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth.middleware');

// CUSTOMER y ADMIN
router.get('/', authenticate, productController.getAllProducts);
router.get('/:id', authenticate, productController.getProductById);

// Solo ADMIN
router.post('/', authenticate, requireAdmin, productController.createProduct);
router.put('/:id', authenticate, requireAdmin, productController.updateProduct);
router.delete('/:id', authenticate, requireAdmin, productController.deleteProduct);

module.exports = router;