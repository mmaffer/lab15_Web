const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');

// Un producto pertenece a una categoría (opcional)
Product.belongsTo(Category, { foreignKey: 'CategoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'CategoryId', as: 'products' });

module.exports = { User, Product, Category };
