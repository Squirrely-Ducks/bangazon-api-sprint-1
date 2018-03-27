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

// method returning a promise that queries and selects a products belonging to an order from the database
module.exports.get_order_prods = (id) => {
    return new Promise((resolve, reject) => {
        console.log(id, 'what');
        db.all(`SELECT prod_id, title, price, description, type_id, seller_id
        FROM order_product
        JOIN product on product_id = prod_id
        WHERE order_id="${id}"`,
            (err, ord_prod) => {
                if (err) return reject(err);
                resolve(ord_prod)
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
            ${product_id},
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

