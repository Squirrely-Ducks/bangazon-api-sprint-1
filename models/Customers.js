
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT *
            FROM customer`,
            (err, custy) => {
                if (err) return reject(err);
                resolve(custy);
            });
    });
};

module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT *
            FROM customer
            WHERE cust_id = "${id}"`,
            (err, custy) => {
                if (err) return reject(err);
                resolve(custy);
            });
    });
};