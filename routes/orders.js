const { Router } = require('express');
const orderRouter = Router();
const {get_orders, get_one_order, add_order, order_deleted, edit_order }= require('../controllers/order_ctrl');

// setting routes for each of these methods
orderRouter.get('/orders', get_orders);
orderRouter.get('/orders/:id', get_one_order);
orderRouter.post('/order/new', add_order);
orderRouter.put('/order/:id/edit', edit_order);
orderRouter.delete('/order/delete/:id', order_deleted);

module.exports = orderRouter;