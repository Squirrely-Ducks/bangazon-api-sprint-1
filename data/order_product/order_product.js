
module.exports.generate_order_product = () => {
    let order_product = [];
    for (let i = 0; i < 30; i++) {
        let order_id = Math.floor(Math.random()*(20) + 1);
        let product_id = Math.floor(Math.random()*(20) + 1);
        order_product.push({order_id, product_id})
        }
    return order_product;
}