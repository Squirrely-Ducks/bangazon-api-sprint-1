const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

// a method returning a promise that queries and selects all products from the data base
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

// method returning a promise that queries and selects a single product from the data base
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

// method that returns a promise that posts a new product to the data base 
module.exports.new_products = ({ title, price, description, type_id, seller_id }) => {
    return new Promise((resolve, reject) => {
        db.run(` INSERT INTO product VALUES (
            null,
            "${title}",
            "${price}",
            "${description}",
            ${type_id},
            ${seller_id}) `, function(err, product) {
                if (err) {
                    console.log(err);
                    reject(err);

                }
                resolve(product, this.lastID)
            })
    })
}

//EDIT Product
module.exports.update_product = (id, columns, values) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < columns.length; i++) {
            db.run(`UPDATE product
                SET "${columns[i]}" = "${values[i]}"
                WHERE product.prod_id = ${id}`, 
                function (err, rows) {
                    resolve(this.changes);
                });
        }
    });
};

// DELETE Product
module.exports.remove_product = (id) => {
    console.log('ID', id );
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM product
            WHERE product.prod_id = ${id}`,
            function(err) {
                if(err) reject(err);

                resolve({"message": `${this.changes} product has been deleted`});
        });
    });
};
