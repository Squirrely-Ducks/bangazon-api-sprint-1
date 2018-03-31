
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
            WHERE customer_id = "${id}"`,
            (err, custy) => {
                if (err) return reject(err);
                resolve(custy);
            });
    });
};

module.exports.new_customer = ({ first_name, last_name, street, city, state, zip, phone, email, acct_date, active}) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO customer VALUES (
            null,
            "${first_name}",
            "${last_name}",
            "${street}", 
            "${city}",
            "${state}",
            "${zip}",
            ${phone},
            "${email}",
            "${acct_date}",
            ${active})`,
            function(err, cust) {
                if (err){
                    console.log(err);
                    reject(err);
                }
                resolve(cust, this.lastId);
            });
    });
}

// method to get customers who have not placed and order yet
module.exports.not_active = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * 
        FROM customer
                WHERE active = 0`,
            (err, cust) => {
                if (err) return reject(err);
                resolve(cust)
            })
    })
}