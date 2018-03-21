const { execute_prod_data } = require(`./product_data/build_product_data`);
const { execute_cust_data } = require(`./customer_data/build_customer_data`);
const { execute_train_data} = require('./training_data/build_training_programs');

execute_prod_data();
execute_cust_data();
execute_train_data();