const connection = require('../config');

const generateRole = (title, salary, department_id) => {
    console.log('creating role');
    const query = connection.query("INSERT INTO role SET ?", {title, salary, department_id}, (err, res) => {
      if (err) throw err;
      console.log(res)
    });
  }

  module.exports = generateRole;