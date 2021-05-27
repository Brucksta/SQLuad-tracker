const { queryDB } = require('../utils');

async function queryAllEmployees() {
    try {
        const results = await queryDB('SELECT * FROM employee')
        return results.map(({ first_name }) => first_name);
    } catch ( error) {
        throw error;
    }
};

    module.exports = {
        queryAllEmployees
    };
  