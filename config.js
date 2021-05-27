const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
  
    // Your port; if not 3306
    port: process.env.DB_PORT,
  
    // Your username
    user: process.env.DB_USERNAME,
  
    // Be sure to update with your own MySQL password!
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  

  module.exports = connection;