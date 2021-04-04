const inquirer = require("inquirer");
let teammateProfile = [];

// --------- prompt for info
// input for team manager’s name, employee ID, email address, and office number

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "team managers name",
        message: "Enter a manager’s name.",
      },
      {
        type: "number",
        name: "employee ID",
        message: "Enter an employee ID.",
      },
      {
        type: "input",
        name: "email address",
        message: "Enter an email address.",
      },
      {
        type: "number",
        name: "office number",
        message: "Enter an office number.",
      },
      // list for add an engineer or an intern or to finish building my team
      {
        type: "list",
        name: "final prompt",
        message:
          "Add an engineer or an intern or to finish building your team.",
        choices: ["Engineer", "Intern", "Nobody"],
        default: "Nobody",
      },
    ])

    .then(function (data) {
      switch (data.addTeammates) {
        case "Yes, an engineer.":
          addEngineer();
          break;

        case "Yes, an intern.":
          addIntern();
          break;
        case "No, I am finished.":
          finishProfile();
          break;
      }
    });
};

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter engineers name.",
        name: "name",
      },
      {
        type: "number",
        message: "Enter engineers ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter engineers email address.",
        name: "email",
      },
      {
        type: "input",
        message: "Enter engineers GitHub username",
        name: "github",
      },
    ])
    .then(function (data) {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const github = data.github;
      const teammate = new Engineer(name, id, email, github);
      teammateProfile.push(teammate);
      addTeammates();
    });
};

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter interns name.",
        name: "name",
      },
      {
        type: "number",
        message: "Enter engineers ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter engineers email address.",
        name: "email",
      },
      {
        type: "input",
        message: "Enter school for intern.",
        name: "school",
      },
    ])
    .then(function (data) {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const school = data.school;
      const teammate = new Intern(name, id, email, school);
      teammateProfile.push(teammate);
      addTeammates();
    });
};

function addTeammates() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Add more teammates?",
        choices: ["Yes, an engineer.", "Yes, an intern.", "No, I am finished."],
        name: "addMoreTeammates",
      },
    ])

    .then(function (data) {
      switch (data.addMoreTeammates) {
        case "Yes, an engineer.":
          addEngineer();
          break;

        case "Yes, an intern.":
          addIntern();
          break;
        case "No, I am finished.":
          finishProfile();
          break;
      }
    });
};
// WHEN I select the engineer option
// THEN I am prompted with enter the engineer’s name, ID, email, and GitHub username,

//

// --------- output to html
