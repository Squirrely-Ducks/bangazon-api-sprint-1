const faker = require('faker');

module.exports.generate_employee = () => {
    let employee = [];
    for (let i = 0; i < 50; i++) {
        let dept_id = Math.floor(Math.random() * (7) + 1);
        let first_name = faker.name.firstName();
        let last_name = faker.name.lastName();
        let job_title = faker.name.jobTitle();
        let is_supervisor = `${supervisor_boolean()}`;
        employee.push({
            dept_id,
            first_name,
            last_name,
            job_title,
            is_supervisor
        });
    }
    return employee;
};

const supervisor_boolean = () => {
    let num = Math.random();
    if (num < 0.2) {
        return true;
    } else {
        return false;
    }
};