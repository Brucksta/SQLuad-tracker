const inquirer = require('inquirer');


inquirer.prompt([
    {
    name: 'choice',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
        {name: "View employees", value: "VIEW-EMPLOYEE"},
        {name: "view employees by department", value: "DEPARTMENT"},
        {name: "Update employee role", value: "ROLE"},
    ]
    },
])