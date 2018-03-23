const { get_all, get_one }= require('../models/Products');

module.exports.get_products = (req, res, next ) => {
    get_all()
    .then((products) =>{
        res.status(200).json(products);
    })
    .catch((err) => next(err))
}

module.exports.get_one_product = (req, res, next ) => {
    let id = req.params.id
    get_one(id)
    .then((product) => {
        if (product) {
            res.status(200).json(product);
        } else {
            let err = new Error('404: customer not found');
            next(err)
        }
    })
    .catch((err) => next(err));
}