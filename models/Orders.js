const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

// method returning a promise that queries and selects all orders from the data base
module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT *
            FROM orders`,
            (err, orders) => {
                if (err) return reject(err);
                resolve(orders);
            });
    });
};

// method returning a promise that queries and selects a single order from the data base
module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT *
            FROM orders
            WHERE order_id = "${id}" `,
            (err, order) => {
                if (err) return reject(err)
                resolve(order)
            });
    });
};

// method that returns a promise that posts a new order to the data base
module.exports.new_orders = ({ customer_id, payment_type_id, product_id, order_date, completed }) => {
    return new Promise((resolve, reject) => {
        db.run(` INSERT INTO orders VALUES (
            null,
            "${customer_id}",
            "${payment_type_id}",
            "${product_id}",
            ${order_date},
            ${completed}) `, function (err, order) {
                if (err) {
                    console.log(err);
                    reject(err);

                }
                resolve(order, this.lastID)
            });
    });
};