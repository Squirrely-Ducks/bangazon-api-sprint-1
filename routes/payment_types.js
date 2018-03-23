
const { Router } = require('express');
const paymentRouter = Router();
const {get_payments, get_by_type, get_customer_payment} = require('../controllers/payment_ctrl');

paymentRouter.get('/payment', get_payments);
paymentRouter.get('/payment/type/:id', get_by_type);
// payment_router.get('/payment/customer/:id', get_customer_payment);

module.exports = paymentRouter;
