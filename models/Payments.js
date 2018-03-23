
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

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

// module.exports.get_by_customer = () => {

// }
