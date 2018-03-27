const { Router }= require('express');
const productRouter = Router();
const {get_products, get_one_product, add_products, edit_product, delete_product }= require('../controllers/product_ctrl');

// setting the routes for each of these methods
productRouter.get('/products', get_products);
productRouter.get('/products/:id', get_one_product);
productRouter.post('/products/new', add_products);
productRouter.post('/products/new', add_products)
productRouter.put('/products/:id/edit', edit_product)
productRouter.delete('/products/:id/delete', delete_product)

module.exports = productRouter;