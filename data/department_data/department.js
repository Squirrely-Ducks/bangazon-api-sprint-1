const faker = require('faker');

module.exports.generateDepartment = () => {
    let department = [];
    for (let i = 0; i < 7; i++) {
        let dept_name = faker.random.words();
        let budget = faker.random.number();

        department.push({
            'dept_name': dept_name,
            'budget': budget,
        });
    }
    return department;
}