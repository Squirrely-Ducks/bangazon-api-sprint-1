'use strict';
const faker = require('faker');

module.exports.generate_training_programs = () => {
    let training_program = [];

    for(let i = 0; i < 10; i++){
        let name = faker.company.catchPhrase();
        let startDate = faker.date.between('2017-12-31','2018-12-13');
        let endDate = faker.date.future('1',startDate);
        let capacity = Math.floor(Math.random()* 30) + 1;
    

    training_program.push({
        'name' : name,  
        'start_date': startDate,
        'end_date': endDate,
        'capacity': capacity
    })
};

    return training_program;
}