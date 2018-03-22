const { createWriteStream } = require('fs');
const { generate_employee_training } = require('./employee_training');

module.exports.execute_employee_training_data = () => {
    let employee_training = generate_employee_training();
    let employee_training_stream = createWriteStream('./data/json/employee_training.json');
    employee_training_stream.write(JSON.stringify(employee_training));
};