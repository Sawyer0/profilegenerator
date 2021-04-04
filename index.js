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
        type: 'number',
        name: 'employee ID',
        message: 'Enter an employee ID.',
      },
      {
        type: 'input',
        name: 'email address',
        message: 'Enter an email address.',
      },
      {
        type: 'number',
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

  .then(function (data) {

    switch (data.addTeammates) {
        case "Yes, add an engineer":
            addEngineer();
            break;

        case "Yes, add an intern":
            addIntern();
            break;
        case "No, my team is complete":
          finishProfile();
            break;
    }
});
}

function addEngineer() {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter engineers name.",
        name: "name"
    },
    {
        type: "number",
        message: "Enter engineers ID number.",
        name: "id"
    },
    {   
        type: "input",
        message: "Enter engineers email address.",
        name: "email"
    },
    {   
        type: "input",
        message: "Enter engineers GitHub username",
        name: "github"
    },
])
};

function addIntern() {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter interns name.",
        name: "name"
    },
    {
        type: "number",
        message: "Enter engineers ID number.",
        name: "id"
    },
    {
        type: "input",
        message: "Enter engineers email address.",
        name: "email"
    },
    {   
        type: "input",
        message: "Enter school for intern.",
        name: "school"
    },
])
};
// WHEN I select the engineer option
// THEN I am prompted with enter the engineer’s name, ID, email, and GitHub username,

//    

// --------- output to html
