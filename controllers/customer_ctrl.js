const { get_all, get_one, new_customer, not_active } = require('../models/Customers');

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

module.exports.add_customer = (req, res, next) => { 
    new_customer(req.body)
        .then((customer) => {
            res.status(200).json(customer);
        }).catch((err) => next(err));
}

// method executing not active 
module.exports.view_non_active = (req, res, next ) => {
    not_active()
        .then((customers) =>{
            res.status(200).json(customers);
        })
        .catch((err) => next(err));
}