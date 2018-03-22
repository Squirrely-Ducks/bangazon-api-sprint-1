const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/squirrely_ducks.sqlite');
const { readFileSync } = require('fs');
const product_type_data = JSON.parse(readFileSync('./data/product_type.json'));

module.exports.build_prod_type_table = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run('DROP TABLE IF EXISTS product_type')
            .run(`CREATE TABLE IF NOT EXISTS product_type (
                type_id INTEGER PRIMARY KEY,
                type TEXT
            )`, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    });
};

module.exports.insert_prod_type_data = () => {
    return new Promise((resolve, reject) => {
        product_type_data.forEach(({type}) => {
            db.run(`INSERT INTO product_type VALUES (
                ${null},
                "${type}"
            )`, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    });
};