const { createWriteStream } = require('fs');
const { generate_order_product } = require('./order_product');

module.exports.execute_order_product_data = () => {
    let order_product = generate_order_product();
    let order_product_stream = createWriteStream('./data/json/order_product.json')
    order_product_stream.write(JSON.stringify(order_product));
}