const { Router } = require('express');
const computerRouter = Router();
const { get_computers, get_one_computer, add_computer, edit_computer, delete_computer } = require('../controllers/computer_ctrl');

computerRouter.get('/computers', get_computers);
computerRouter.get('/computers/:id', get_one_computer);
computerRouter.post('/computers/new', add_computer);
computerRouter.put('/computers/:id/edit', edit_computer);
computerRouter.delete('/computers/:id/delete', delete_computer);

module.exports = computerRouter;