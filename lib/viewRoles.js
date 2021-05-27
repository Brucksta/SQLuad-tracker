const connection = require('../config');

function viewRoles() {
    const query = connection.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        console.table(res)
      });
}


module.exports = viewRoles;