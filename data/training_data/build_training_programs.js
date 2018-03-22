
const { createWriteStream } = require('fs');
const { generate_training_programs } = require('./training_programs');


module.exports.execute_train_data = () => {
    let training = generate_training_programs();
    let trainStream = createWriteStream('./data/training_program.json');
    trainStream.write(JSON.stringify(training));
}
