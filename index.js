const inquirer = require('inquirer');

// --------- prompt for info
// input for team manager’s name, employee ID, email address, and office number

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'team managers name',
        message: 'Enter a manager’s name.',
      },
      {
        type: 'input',
        name: 'employee ID',
        message: 'Enter an employee ID.',
      },
      {
        type: 'input',
        name: 'email address',
        message: 'Enter an email address.',
      },
      {
        type: 'input',
        name: 'office number',
        message: 'Enter an office number.',
      },
    // list for add an engineer or an intern or to finish building my team
      {
        type: 'list',
        name: 'final prompt',
        message: 'Add an engineer or an intern or to finish building your team.',
        choices: ['engineer', 'intern', 'nobody'],
        default: 'nobody'
    }
  ])

  const answer = engineer;
  
  switch (true) {
      // If answer is engineer 
      case answer = engineer:
          console.log("engineer");
          break;
      // If answer is intern
      case answer = intern:
          console.log("intern");
          break;
      default:
          console.log("nobody");
  }

// WHEN I select the engineer option
// THEN I am prompted with enter the engineer’s name, ID, email, and GitHub username,

//    

// --------- output to html
