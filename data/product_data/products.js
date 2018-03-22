'use strict';

const faker = require('faker');

module.exports.generateProducts = () => {
  let products = [];
  
  for (let i = 0; i < 20; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.company.bs();
    let type_id = Math.floor(Math.random() * 10) + 1;
    let seller_id = Math.floor(Math.random() * 15) + 1;

    products.push({
      "title": title,
      "price": price,
      "description": description,
      "type_id": type_id,
      "seller_id": seller_id
    });
  };
  return products;
}