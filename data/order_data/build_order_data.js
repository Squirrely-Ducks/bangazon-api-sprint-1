"use strict";

const { createWriteStream } = require('fs');
const { order_gen } = require('./orders');

module.exports.execute_order_data =()=>{
    let orders = order_gen();
    let orderStream = createWriteStream(`./data/orders.json`);
    orderStream.write(JSON.stringify(orders));   
}
