const Customer = require('../models/Customers');

module.exports.get_customers = ({ query: { inactive } }, res, next) => {
    const getCustomers = inactive ? "not_active" : "get_all";
    Customer[getCustomers]()
        .then((customers) => {
            res.status(200).json(customers);
        })
        .catch((err) => next(err))
}

module.exports.get_one_customer = (req, res, next) => {
    let id = req.params.id
    Customer.get_one(id)
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

module.exports.add_customer = (req, res, next) => {
    Customer.new_customer(req.body)
        .then((customer) => {
            res.status(200).json(customer);
        }).catch((err) => next(err));
}
