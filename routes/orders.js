const { Router } = require('express');
const orderRouter = Router();
const { get_orders, get_one_order, add_order, edit_order, order_deleted, get_order_products } = require('../controllers/order_ctrl');

// setting routes for each of these methods
orderRouter.get('/orders', get_orders);
orderRouter.get('/orders/:id', get_one_order);
orderRouter.get('/orders/:id/products', get_order_products);
orderRouter.post('/orders/new', add_order);
orderRouter.delete('/orders/:id/delete', order_deleted);
orderRouter.put('/orders/:id/edit', edit_order);

module.exports = orderRouter;