"use strict";

const { createWriteStream } = require('fs');
const { order_gen } = require('./orders');


let orders = order_gen();
let orderStream = createWriteStream(`./data/orders.json`);
orderStream.write(JSON.stringify(orders));