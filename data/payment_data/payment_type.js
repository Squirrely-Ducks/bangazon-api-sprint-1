'use strict';

const faker = require('faker');



module.exports.gen_pay_type = () => {
  let payment_type = [];
  
  for (let i = 0; i < 20; i++) {
    let customer_id  = Math.floor(Math.random() * 11) + 1;
    let type = Math.floor(Math.random() * 5) + 1;
    let account_number = Math.floor(Math.random() * 10) + 1;

    payment_type .push({
      "customer_id": customer_id,
      "type": type,
      "account_number": account_number,
    });
  };
  return payment_type;
}