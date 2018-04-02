const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM computer`,
            (err, comp) => {
                if (err) return reject(err);
                resolve(comp)
            });
    })
};
module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT computer.*, (employee.first_name|| " "|| employee.last_name) as owner
        FROM computer
        JOIN employee ON employee.employee_id = computer.employee_id
        WHERE computer_id = "${id}"`,
            (err, comp) => {
                if (err) return reject(err);
                resolve(comp);
            });
    });
}

module.exports.get_active = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT computer_id, purchase_date
        FROM computer
        WHERE computer.trash_date = 'undefined'`,
            (err, comp) => {
                if (err) return reject(err);
                resolve(comp);
            });
    });
}
module.exports.new_computer = ({ purchase_date, trash_date, employee_id }) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO computer VALUES(
            null,
           "${purchase_date}",
           "${trash_date}",
            ${employee_id})`, function (err, emp) {
                if (err) return reject(err);
                resolve(this.lastID);
            });
    });
}

module.exports.update_computer = (id, column, value) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE computer 
            SET "${column}" = "${value}"
            WHERE computer_id =${id}`, function (err, row) {
                if(err) return reject(err);
                resolve(this.changes);
            });
    });
}


module.exports.remove_computer = (id)=>{
    return new Promise((resolve,reject)=>{
        db.run(`DELETE FROM computer
                WHERE computer_id = ${id}`,
            function(err, column){
                resolve(column);
            });
    });
}