
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/squirrely_ducks.sqlite');
const { readFileSync } = require('fs');
const order_product_data = JSON.parse(readFileSync('./data/json/order_product.json'));

module.exports.build_order_product_table = () => {
    return new Promise((resolve, reject) =>{
        db.serialize(() =>{
            db.run('DROP TABLE IF EXISTS order_product')
                .run(`CREATE TABLE IF NOT EXISTS order_product (
                    order_id INTEGER,
                    product_id INTEGER,
                    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
                    FOREIGN KEY (product_id) REFERENCES product(prod_id) ON DELETE CASCADE
                )`, (err) =>{
                    if (err) reject(err);
                    resolve();
                });
            });
        });
    };

module.exports.insert_order_product_data = () => {
    return new Promise((resolve, reject) => {
        order_product_data.forEach(({order_id, product_id}) =>{
            db.run(`INSERT INTO order_product VALUES (
                ${order_id},
                ${product_id}
            )`, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    });
};