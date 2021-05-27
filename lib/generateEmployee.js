const connection = require('../config');

const generateEmployee = (first_name, last_name, role_id, manager_id) => {
    console.log('creating employee');
    const query = connection.query("INSERT INTO employee SET ?", {first_name, last_name, role_id, manager_id}, (err, res) => {
      if (err) throw err;
      console.log(res)
    });
  }

  module.exports = generateEmployee;