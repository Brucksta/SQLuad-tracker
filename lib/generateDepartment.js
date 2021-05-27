const connection = require('../config');

const generateDepartment = (departmentName) => {
    console.log('creating department');
    const query = connection.query("INSERT INTO department SET ?", {departmentName}, (err, res) => {
      if (err) throw err;
      console.log(res)
    });
  }

  module.exports = generateDepartment;