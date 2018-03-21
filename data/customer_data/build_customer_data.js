const { createWriteStream } = require('fs');

const { generateCustomers } = require('./customers');

module.exports.execute_cust_data = ()=>{
let customers = generateCustomers();
let custStream = createWriteStream(`customers.json`);
custStream.write(JSON.stringify(customers));
};