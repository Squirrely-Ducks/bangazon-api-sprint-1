
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT *
            FROM product_type`,
            (err, product_type) => {
                if (err) return reject(err);
                resolve(product_type);
            });
    });
};

module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT *
                FROM product_type
                WHERE type_id = ${id}`)
    });
};

module.exports.new_prod_type = ({ type }) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT into product_type VALUES (
            null,
            "${type}")`, 
            function (err, prod) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                console.log('prod', prod);
                
                resolve(prod, this.lastID);
            });
    });
};

module.exports.change_prod_type = (id, column, value) => {
    return new Promise((resolve,reject)=>{
        db.run(`UPDATE product_type
                SET "${column}" = "${value}"
                WHERE type_id = ${id}`,
            function(err,row){
                console.log(this.changes);
                resolve(this.changes)
            })
    })
}

module.exports.delete_prod_type = (id) => {
    return new Promise((resolve,reject)=>{
        db.run(`DELETE FROM product_type
                WHERE type_id = ${id}`,
            function(err,prod){
                resolve(this);
            })
    })
}

module.exports.get_prods = (id) => {
    return new Promise((resolve,reject)=>{
        db.all(`SELECT *
                FROM product
                WHERE type_id = ${id}`,
            function(err,prod){
                resolve(prod);
            })
    })
}