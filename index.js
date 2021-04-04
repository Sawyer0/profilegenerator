const inquirer = require("inquirer");

const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

let teammateProfile = [];

// --------- prompt for info
// input for team manager’s name, employee ID, email address, and office number

promptUser()

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "team profile name",
        message: "What is your team name?",
      },
    ])
    .then(function (data) {
      const teamProfileName = data.teamProfileName;
      teammateProfile.push(teamProfileName);
      addManager();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter managers name.",
        name: "name",
      },
      {
        type: "number",
        message: "Enter managers ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter managers email address.",
        name: "email",
      },
    ])
    .then(function (data) {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const teammate = new Manager(name, id, email);
      teammateProfile.push(teammate);
      addTeammates();
    });
}

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
}

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
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employees name.",
        name: "name",
      },
      {
        type: "number",
        message: "Enter employees ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter employees email address.",
        name: "email",
      },
    ])
    .then(function (data) {
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const teammate = new Employee(name, id, email);
      teammateProfile.push(teammate);
      addTeammates();
    });
}

function addTeammates() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Add more teammates?",
        choices: [
          "Yes, an engineer.",
          "Yes, an intern.",
          "Yes, an employee.",
          "No, I am finished.",
        ],
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
        case "Yes, an employee.":
          addEmployee();
          break;
        case "No, I am finished.":
          finishProfile();
          break;
      }
    });
}

function finishProfile() {
  console.log("Congratulations, Your Team Profile Has Been Generated!");
}
// WHEN I select the engineer option
// THEN I am prompted with enter the engineer’s name, ID, email, and GitHub username,

//

// --------- output to html
