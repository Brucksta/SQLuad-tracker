const { queryDB } = require('../utils');

async function queryAllEmployees() {
    try {
        const results = await queryDB('SELECT * FROM employee')
        return results.map(({ first_name, id}) => ({name: first_name, value: id }));
    } catch ( error) {
        throw error;
    }
};

async function queryRoles() {
    try {
        const results = await queryDB('SELECT * FROM role')
        return results.map(({ title, id }) => ({name: title, value: id}));
    } catch ( error) {
        throw error;
    }
};

async function updateEmployeeRole(employeeId, role_id) {
    await queryDB("Update employee SET role_id = ? where id = ?", [role_id, employeeId]);
    console.log("Updated Employee");
}


    module.exports = {
        queryAllEmployees,
        queryRoles,
        updateEmployeeRole
    };
  