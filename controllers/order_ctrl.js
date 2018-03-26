const { get_all, get_one, new_orders }= require('../models/Orders');

// method for getting all products from the data base
module.exports.get_orders = (req, res, next) => {
    get_all()
        .then((orders) => {
            res.status(200).json(orders);
        })
        .catch((err) => next(err))
};

// method for getting one product from the data base
module.exports.get_one_order = (req, res, next) => {
    let id = req.params.id
    get_one(id)
        .then((order) => {
            if (order) {
                res.status(200).json(order);
            } else {
                let err = new Error('404: customer not found');
                next(err)
            }
        })
        .catch((err) => next(err));
};

// method requiring the new order method to post an order to the data base
module.exports.add_order = (req, res, next) => {
    new_orders(req.body)
        .then((order) => {
            res.status(200).json(order);
        }).catch((err) => next(err))
}