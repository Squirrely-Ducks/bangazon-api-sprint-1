
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

// gets all payment types
module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT *
            FROM payment_type`,
            (err, payment) => {
                if (err) return reject(err);
                resolve(payment);
            });
    });
};
// gets payment types by type id
module.exports.get_by_type = (type) => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT *
            FROM payment_type
            WHERE type = ${type}`,
            (err, payment) => {
                if (err) return reject(err);
                resolve(payment);
            });
    });
};
// gets payment types by customer id
module.exports.get_by_customer = (id) => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT *
            FROM payment_type
            WHERE customer_id = ${id}`,
            (err, payment) => {
                if (err) return reject(err);
                resolve(payment)
            });
    });
};
