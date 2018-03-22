const { createWriteStream } = require('fs');
const { generate_employee } = require('./employee');

module.exports.execute_employee_data = () => {
    let employee = generate_employee();
    let employee_stream = createWriteStream('./data/employee.json');
    employee_stream.write(JSON.stringify(employee));
};