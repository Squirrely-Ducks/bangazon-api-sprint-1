
module.exports.generate_employee_training = () => {
    let employee_training = [];
    for (let i = 0; i < 30; i++) {
        let employee_id =  Math.floor(Math.random()*(50) + 1);
        let program_id =  Math.floor(Math.random()*(10) + 1);
        employee_training.push({employee_id, program_id});
    };
    return employee_training;
};