const { createWriteStream } = require('fs');
const { generateDepartment } = require('./department');

// Create department JSON
module.exports.execute_department_data = () => {
let department = generateDepartment();
let depart_stream = createWriteStream('./data/department.json');
depart_stream.write(JSON.stringify(department));
}