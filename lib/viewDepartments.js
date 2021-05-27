const connection = require('../config');

function viewDepartments() {
    const query = connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res)
      });
}


module.exports = viewDepartments;