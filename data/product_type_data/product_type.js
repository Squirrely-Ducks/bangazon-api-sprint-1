const faker = require('faker');

module.exports.generate_product_type = () => {
    let product_type = [];
    for (let i = 0; i < 10; i++) {
        let type = faker.commerce.product();
        product_type.push({type});
    }
    return product_type;
};