const { createWriteStream } = require('fs');
const { generate_product_type } = require('./product_type');

module.exports.execute_prod_type_data = () => {
    let product_types = generate_product_type();
    let product_type_stream = createWriteStream('./data/product_type.json');
    product_type_stream.write(JSON.stringify(product_types));
};