
const { Router } = require('express');
const prodTypeRouter = Router();
const {get_types, get_single, add_prod_type, remove_prod_type, edit_prod_type } = require('../controllers/product_type_ctrl');

prodTypeRouter.get('/prodType/all', get_types);
prodTypeRouter.get('/prodType/:id', get_single);
prodTypeRouter.post('/prodType/new', add_prod_type);
prodTypeRouter.put('/prodType/edit/:id', edit_prod_type);
prodTypeRouter.delete('/prodType/delete/:id', remove_prod_type);

module.exports = prodTypeRouter;