require('dotenv').config();
const connection = require('./config');
const init = require('./questions');

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    init();
  });