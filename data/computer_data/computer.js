const faker = require('faker');

module.exports.generateComputer = () => {
    let computer = [];

    for (let i = 0; i < 10; i++) {
        let purchase_date = faker.date.between('1900-01-04', '2018-01-01');
        let trash_date = faker.date.between('1900-01-04', '2018-01-01');
        let employee_id = faker.random.number();

        computer.push({
            'purchase_date': purchase_date,
            'trash_date': trash_date,
            'employee_id': employee_id
        });
    }
    return computer;
}