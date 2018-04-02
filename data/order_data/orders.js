'use strict';

const faker = require('faker');

module.exports.order_gen = () => {


  let orders = [];

  for (let i = 0; i < 20; i++) {
    let customer_id = Math.floor(Math.random() * 10) + 1;
    let payment_type_id = Math.floor(Math.random() * 20) + 1;
    let order_date = faker.date.between('2017-3-4', '2018-3-4');
    let completed = (Math.floor(Math.random() * 2) +1) - 1;

    orders.push({
      "customer_id": customer_id,
      "payment_type_id": payment_type_id,
      "order_date": order_date,
      "completed": completed,
    });
  }
  return orders;
};
