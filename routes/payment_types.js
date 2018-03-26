
const { Router } = require('express');
const paymentRouter = Router();
const {get_payments, get_by_type, get_customer_payment, add_payment, edit_payment, payment_deleted} = require('../controllers/payment_ctrl');

paymentRouter.get('/payment', get_payments);
paymentRouter.get('/payment/type/:id', get_by_type);
paymentRouter.get('/payment/customer/:id', get_customer_payment);
paymentRouter.post('/payment/new', add_payment);
paymentRouter.put('/payment/:id/edit', edit_payment);
paymentRouter.delete('/payment/delete/:id', payment_deleted);
module.exports = paymentRouter;
