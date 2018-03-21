
const { createWriteStream } = require('fs');

const { generateCustomers } = require('./customers');

let customers = generateCustomers();
let custStream = createWriteStream(`customers.json`);

custStream.write(JSON.stringify(customers));