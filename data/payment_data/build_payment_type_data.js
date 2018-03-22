
const { createWriteStream } = require('fs');
const { gen_pay_type  } = require('./payment_type');

module.exports.execute_payment_type_data=()=>{
    let pay_type = gen_pay_type();
    let payment_type_Stream = createWriteStream(`./data/payment_type.json`);
    payment_type_Stream.write(JSON.stringify(pay_type));
}
