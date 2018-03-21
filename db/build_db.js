const sqlite3 = require('sqlite3').verbose();
const {build_train_table, insert_training_data } = require('./build_training');


const db = new sqlite3.Database("squirrely_ducks.sqlite", err => {
  build_train_table()
    .then(() => {
      insert_training_data();      
    });
});