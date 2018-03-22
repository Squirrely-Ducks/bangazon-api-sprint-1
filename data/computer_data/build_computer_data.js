const { createWriteStream } = require('fs');
const { generateComputer } = require('./computer');

// Create computer JSON ... 
module.exports.execute_computer_data = () => {
let computers = generateComputer();
let comp_stream = createWriteStream(`./computer.json`);
comp_stream.write(JSON.stringify(computers));
}