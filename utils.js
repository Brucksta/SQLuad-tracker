const connection = require("./config")

const queryDB = async (query, data = []) => new Promise((resolve, reject) => {
    connection.query(query, data, (err, results) => {
        if (err) { return reject(err) }
        resolve(results);
    });
});

module.exports = {
    queryDB
}