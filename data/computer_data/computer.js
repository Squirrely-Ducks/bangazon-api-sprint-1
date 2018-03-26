const faker = require('faker');

module.exports.generateComputer = () => {
    let computer = [];

    for (let i = 0; i < 10; i++) {
        let purchase_date = faker.date.between('1900-01-04', '2018-01-01');

        computer.push({
            'purchase_date': purchase_date,
        });
    }
    return computer;
}