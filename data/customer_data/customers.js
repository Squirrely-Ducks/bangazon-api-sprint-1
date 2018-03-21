'use strict';

const faker = require('faker');

module.exports.generateCustomers = () => {
  let customers = [];
  
  for (let i = 0; i < 10; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let street = faker.address.streetAddress();
    let city = faker.address.city();
    let state = faker.address.state();
    let zip = faker.address.zipCode();
    let phone = faker.phone.phoneNumber();
    let email = faker.internet.email();
    let acct_date = faker.date.past();
    let active = Math.round(Math.random());


    customers.push({
      "first_name": first_name,
      "last_name": last_name,
      "street": street,
      "city": city,
      "state": state,
      "zip": zip,
      "phone": phone,
      "email": email,
      "acct_date": acct_date,
      "active": active

    });
  };
  return customers;
}