
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT *
            FROM product_type`,
            (err, product_type) => {
                if (err) return reject(err);
                resolve(product_type);
            });
    });
};

module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT *
                FROM product_type
                WHERE type_id = ${id}`)
    });
};

module.exports.new_prod_type = ({ type }) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT into product_type VALUES (
            null,
            "${type}")`, 
            function (err, prod) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                console.log('prod', prod);
                
                resolve(prod, this.lastID);
            });
    });
};