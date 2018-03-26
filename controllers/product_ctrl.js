const { get_all, get_one, new_products, update_product, remove_product }= require('../models/Products');

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

//Edit Products
module.exports.edit_product = (req, res, next) => {
    console.log('check');
    let id = req.params.id;
    let columns = Object.keys(req.body);
    let values = Object.values(req.body);
    update_product(id, columns, values)
    .then((product) => {
        res.status(200).json(product);
    })
    .catch((err) => next(err));
};

module.exports.delete_product = (req, res, next) => {
    let id = req.params.id;
    console.log('CTRL', id );
    remove_product(id)
    .then((id) => {
        res.status(200).json(id);
    });
};
