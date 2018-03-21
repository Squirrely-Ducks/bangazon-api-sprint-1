
const { createWriteStream } = require('fs');

const { generateProducts } = require('./products');

let products = generateProducts();
let prodStream = createWriteStream(`products.json`);

prodStream.write(JSON.stringify(products));