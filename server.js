const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: process.env.DB_PORT,

  // Your username
  user: process.env.DB_USERNAME,

  // Be sure to update with your own MySQL password!
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
  });