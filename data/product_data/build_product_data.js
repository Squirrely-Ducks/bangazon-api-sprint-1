
const { createWriteStream } = require('fs');
const { generateProducts } = require('./products');

module.exports.execute_prod_data = () => {
  let products = generateProducts();
  let prodStream = createWriteStream(`./data/products.json`);
  prodStream.write(JSON.stringify(products));
}