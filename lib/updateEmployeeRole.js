const connection = require('../config');

const queryAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
      if (err) throw err;
        res.forEach(({ first_name }) => {
          console.log(first_name)
      });
    });
  };

  const employeeList = queryAllEmployees.res



//   async function roleChange() {
//     const [itemsList, fields] = await queryAllEmployees();
//     const namesList = itemsList.map(e => e.first_name);
//     console.log(namesList);
//     const nameAnswer = await inquirer.prompt([
//       {
//         name: 'choice',
//         type: 'rawlist',
//         choices: namesList,
//         message: 'What auction would you like to place a bid in?',
//       },
//       {
//         name: 'insertRole',
//         type: 'input',
//         message: 'what role would you like to give them?',
//       },
//     ])

//     // let chosenName = itemsList.filter(e => e.first_name == nameAnswer.choice)[0];

//   }
    module.exports = queryAllEmployees;
    module.exports = employeeList;