const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const { authenticate, requireAdmin } = require('../middlewares/auth.middleware');

// Cualquier usuario autenticado puede listar categorías
router.get('/', authenticate, categoryController.getAllCategories);

// Solo ADMIN puede crear categorías
router.post('/', authenticate, requireAdmin, categoryController.createCategory);

module.exports = router;
