const { Router }= require('express');
const productRouter = Router();
const {get_products, get_one_product }= require('../controllers/product_ctrl');

productRouter.get('/products', get_products);
productRouter.get('/products/:id');

module.exports = productRouter;