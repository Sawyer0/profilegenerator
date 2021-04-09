const inquirer = require("inquirer");

const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

function finishProfile(){};

let teammateProfile = [];
let cards = [];

const init = () => {
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
    })

    .then((answers) => {
      console.log(answers);
    });
}

const allCards = []
let card

function renderCards (group) {
  group.forEach(member => {
    console.log(teammate)
    let role = member.getRole()
    switch (role) {
      case 'Manager':
        card = `<div class="card m-3">
            <h5 class="card-header custom-card-head">${member.name}</h5>
            <div class="card-body custom-card-bod">
            <h5 class="card-title"><i class="far fa-clipboard"></i> Manager</h5>
            <p class="card-text">
            <ul class="list-group">
            <li class="list-group-item">Employee ID: ${member.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
            <li class="list-group-item">Office Number: ${member.officeNumber}</li>
            </ul></p>
            </div>
            </div>`
        break
      case 'Engineer':
        card = `<div class="card m-3">
            <h5 class="card-header custom-card-head">${member.name}</h5>
            <div class="card-body custom-card-bod">
            <h5 class="card-title"><i class="fas fa-laptop-code"></i> Engineer</h5>
            <p class="card-text">
            <ul class="list-group">
            <li class="list-group-item">Employee ID: ${member.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
            <li class="list-group-item">GithHub: <a href="https://github.com/${member.github}" target=_blank>${member.github}</a></li>
            </ul></p>
            </div>
            </div>`
        break
      case 'Intern':
        card = `<div class="card m-3">
                <h5 class="card-header custom-card-head">${member.name}</h5>
                <div class="card-body custom-card-bod">
                <h5 class="card-title"><i class="fas fa-graduation-cap"></i> Intern</h5>
                <p class="card-text">
                <ul class="list-group">
                <li class="list-group-item">Employee ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item">School: ${member.school}</li>
                </ul></p>
                </div>
                </div>`
        break
      default:
        break
    }
    allCards.push(card)
  })
}

function finishProfile () {
  renderCards(teammateProfile);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />    
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="jumbotron custom-jumbo">
        <div class="container-fluid text-center">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
<div class="card-group">
${allCards}
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
</body>
</html>`
}
init();
