const { Router } = require('express');
const orderRouter = Router();
const { get_orders, get_one_order, add_order, edit_order, order_deleted }= require('../controllers/order_ctrl');

// setting routes for each of these methods
orderRouter.get('/orders', get_orders);
orderRouter.get('/orders/:id', get_one_order);
orderRouter.post('/order/new', add_order);
orderRouter.delete('/order/:id/delete', order_deleted);
orderRouter.put('/order/:id/edit', edit_order);

module.exports = orderRouter;