const { get_all, get_one, new_products }= require('../models/Products');

// method for getting all products from the data base 
module.exports.get_products = (req, res, next ) => {
    get_all()
    .then((products) =>{
        res.status(200).json(products);
    })
    .catch((err) => next(err))
}

// method for getting one specific product form the data base 
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
};

// method requiring the new products method to post a product to the data base 
module.exports.add_products = (req, res, next ) => {
    new_products(req.body)
    .then((product) =>{
        res.status(200).json(product);
    }).catch((err) => next(err))
}