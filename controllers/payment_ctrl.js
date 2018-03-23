const { get_all, get_by_type, get_by_customer, new_payment } = require('../models/Payments');

module.exports.get_payments = (req, res, next) => {
    get_all()
        .then((payments) => {
            res.status(200).json(payments);
        })
        .catch((err) => next(err));
}

module.exports.get_by_type = (req, res, next) => {
    let id = req.params.id;
    get_by_type(id)
        .then((payments) => {
            if (payments) {
                res.status(200).json(payments);
            } else {
                let err = new Error('404: customer not found');
                next(err);
            }
        })
        .catch((err) => next(err));
}

module.exports.get_customer_payment = (req, res, next) => {
    let id = req.params.id;
    get_by_customer(id)
        .then((payments) => {
            if (payments) {
                res.status(200).json(payments);
            } else {
                let err = new Error('404: customer not found');
                next(err);
            }
        })
        .catch((err) => next(err));
}
