const { prompt } = require('inquirer');
const viewEmployees = require('./lib/viewEmployees');
const viewDepartments = require('./lib/viewDepartments');
const viewRoles = require('./lib/viewRoles')
const generateEmployee = require('./lib/generateEmployee');
const generateDepartment = require('./lib/generateDepartment');
const generateRole = require('./lib/generateRole');
const { queryRoles, queryAllEmployees, updateEmployeeRole } = require('./lib/updateEmployeeRole');
const { queryDB } = require('./utils');


const VIEW_EMPLOYEES = "VIEW_EMPLOYEES";
const VIEW_DEPARTMENTS = "VIEW_DEPARTMENTS";
const VIEW_ROLES = "VIEW_ROLES";
const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const ADD_DEPARTMENTS = "ADD_DEPARTMENTS";
const ADD_ROLE = "ADD_ROLE";
const UPDATE_ROLE = "UPDATE_ROLE"


const start = async () => {
    const answers = await prompt([
    {
    name: 'choice',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
        {name: "View employees", value: "VIEW_EMPLOYEES"},
        {name: "View departments", value: "VIEW_DEPARTMENTS"},
        {name: "View roles", value: "VIEW_ROLES"},
        {name: "Add employees", value: "ADD_EMPLOYEE"},
        {name: "Add departments", value: "ADD_DEPARTMENTS"},
        {name: "Add roles", value: "ADD_ROLE"},
        {name: "Update employee role", value: "UPDATE_ROLE"},
    ]
    },
    //add employee
    {
        name: "employeeFirstName",
        type: 'input',
        message: "What is the employees first name?",
        when: (answers) => answers.choice === ADD_EMPLOYEE
    },
    {
        name: "employeeLastName",
        type: 'input',
        message: "What is the employees last name?",
        when: (answers) => answers.choice === ADD_EMPLOYEE
    },
    {
        name: "employeeRole",
        type: 'input',
        message: 'What is the Role.ID of the employee?',
        when: (answers) => answers.choice === ADD_EMPLOYEE
    },
    {
        name: "employeesManager",
        type: 'input',
        message: "What is the employees manager ID?",
        when: (answers) => answers.choice === ADD_EMPLOYEE
    },
    //add departments
    {
        name: "departmentName",
        type: 'input',
        message: "What is the name of the new department?",
        when: (answers) => answers.choice === ADD_DEPARTMENTS
    },
    //add role
    {
        name: "roleTitle",
        type: 'input',
        message: "What is the title of the new role?",
        when: (answers) => answers.choice === ADD_ROLE
    },
    {
        name: "roleSalary",
        type: 'input',
        message: "What is the salary of the new role?",
        when: (answers) => answers.choice === ADD_ROLE
    },
    {
        name: "roleDepartment",
        type: 'input',
        message: "What department is the new role allocated to?",
        when: (answers) => answers.choice === ADD_ROLE
    },
    {
        name: "whichEmployee",
        type: 'list',
        message: "Who would you like to update?",
        when: (answers) => answers.choice === UPDATE_ROLE,
        choices: await queryAllEmployees,
    },
    {
        name: "newRole",
        type: 'list',
        message: "What role would you like to allocate them?",
        when: (answers) => answers.choice === UPDATE_ROLE,
        choices: await queryRoles,
    },
    ]);
    return answers;
}


async function init() {
    const answers = await start();
    console.log(answers);
    switch (answers.choice) {
        case VIEW_EMPLOYEES:
            viewEmployees();
            break;
        case VIEW_ROLES:
            viewRoles();
            break;
        case VIEW_DEPARTMENTS:
            viewDepartments();
            break;
        case ADD_EMPLOYEE:
            generateEmployee(answers.employeeFirstName, answers.employeeLastName, answers.employeeRole, answers.employeesManager);
            break;
        case ADD_DEPARTMENTS:
            generateDepartment(answers.departmentName);
            break;
        case ADD_ROLE:
            generateRole(answers.roleTitle, answers.roleSalary, answers.roleSalary);
            break;
        case UPDATE_ROLE:
           updateEmployeeRole(answers.whichEmployee, answers.newRole)
    
        default:
            break;
    }
    init();
}


module.exports = init;