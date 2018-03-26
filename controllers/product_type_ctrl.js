const { get_all , get_one, new_prod_type} = require('../models/Product_Types')

module.exports.get_types = (req, res, next ) => {
    get_all()
    .then((prodTypes) =>{
        res.status(200).json(prodTypes);
    })
    .catch((err) => next(err))
}

module.exports.get_single = (req, res, next) => {
    let id = req.params.id;
    get_one(id)
    .then((prodType)=>{
        if(prodType) {
            res.status(200).json(prodType);
        } else {
            let err = new Error('404 product type not found');
            next(err)
        }
    })
    .catch((err)=> next(err))
}

module.exports.add_prod_type = (req, res, next) => {
    new_prod_type(req.body)
    .then((prodType)=>{
        res.status(200).json(prodType);
    }).catch((err)=> next(err));
}

module.exports.delete_prod_type = (req, res, next) => {
    
}