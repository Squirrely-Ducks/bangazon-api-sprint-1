const { Router } = require("express");
const customerRouter = Router();
const { get_customers, get_one_customer } = require('../controllers/customer_ctrl');


customerRouter.get("/customers", get_customers);
customerRouter.get("/customers/:id", get_one_customer);


module.exports = customerRouter;