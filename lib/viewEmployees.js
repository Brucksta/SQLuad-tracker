const connection = require('../config');

function viewEmployees() {
    const query = connection.query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        console.table(res)
      });
}


module.exports = viewEmployees;