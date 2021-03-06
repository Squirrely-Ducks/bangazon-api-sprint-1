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

// method returning a promise that queries and selects a single order and its products from the data base
module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT orders.order_id, customer_id, order_date, completed,
            group_concat(product.title ||' '|| product.price||' '|| product.description||' '|| product.type_id||' '|| product.seller_id,"|") as Products
            FROM order_product
            JOIN orders ON orders.order_id = order_product.order_id
            JOIN product on product.prod_id = order_product.product_id
            WHERE orders.order_id = "${id}" `,
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
            ${customer_id},
            ${payment_type_id},
            "${order_date}",
            ${completed}) `, function (err, order) {
                if (err) {
                    console.log(err);
                    reject(err);

                }
                resolve(order, this.lastID)
            });
    });
};

// method that returns a promise that puts a new order to the data base
module.exports.update_order = (id, column, value) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE orders
                SET "${column}" = "${value}"
                WHERE order_id = ${id}`,
            function (err, rows) {
                resolve(this.changes);
            });
    });
};

// method that returns a promise that deletes an order from the data base 
module.exports.delete_order = (id) => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM orders
                WHERE order_id = ${id}`,
            function (err, column) {
                resolve(column);
            });
    });
};

