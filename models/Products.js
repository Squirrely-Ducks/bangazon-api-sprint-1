const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

module.exports.get_all = () => {
    return new Promise((resolve, reject) =>{
        db.all(
            `SELECT *
            FROM product`,
            (err, product) =>{
                if(err) return reject(err);
                resolve(product);
            });
    });
};

module.exports.get_one = (id) =>{
    return new Promise((resolve, reject) =>{
        db.get(
            `SELECT *
            FROM product
            WHERE prod_id = "${id}" `,
            (err, product) => {
                if (err) return reject(err)
                resolve(product)
            });
    });
};

module.exports.new_products = ({ title, price, description, type_id, seller_id })