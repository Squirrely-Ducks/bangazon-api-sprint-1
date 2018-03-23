const { Router }= require('express');
const productRouter = Router();
const {get_products, get_one_product, add_products }= require('../controllers/product_ctrl');

// setting the routes for each of these methods
productRouter.get('/products', get_products);
productRouter.get('/products/:id', get_one_product);
productRouter.post('/products/new', add_products)

module.exports = productRouter;