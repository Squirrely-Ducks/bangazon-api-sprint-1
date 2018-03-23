const { get_all, get_one } = require('../models/Customers');

module.exports.get_customers = (req, res, next) => {
    get_all()
        .then((customers) => {
            res.status(200).json(customers);
        })
        .catch((err) => next(err))
}

module.exports.get_one_customer = (req, res, next) => {
    let id = req.params.id
    get_one(id)
        .then((customer) => {
            if (customer) {
                res.status(200).json(customer);
            } else {
                let err = new Error('404: customer not found');
                next(err);
            }
        })
        .catch((err) => next(err));
}