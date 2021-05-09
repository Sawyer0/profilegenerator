const inquirer = require("inquirer");

const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

function finishProfile() {}

let teammateProfile = [];
let Cards = [];

const init = () => {
  inquirer
    .prompt([
      {
        
        type: "input",
        name: "teamname",
        message: "What is your team name?",
      },
    ])
    .then(function (data) {
      const teamname = data.teamname;
      teammateProfile.push(teamname);
      addManager();
    });
};

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
      {
        type: "number",
        message: "what is the managers office number?",
        name: "officeNumber",
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

function finishProfile() {
  teammateProfile.forEach((element) => {
    switch (element.jobTitle) {
      case "manager":
        console.log("element manager: ", ",element");
        var div = `<div class="card">
                      <div class="card-header">
                          <h6 id="employeeName">${element.name}</h6>
                          <h6 id="jobTitle"><i class="fas fa-clipboard"></i> manager</h6>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li id="id" class="list-group-item">id: ${element.id}</li>
                              <li id="email" class="list-group-item">email: <a href="mailto:${element.email}" target="_blank" rel="noopener noreferrer">${element.email}</a></li>
                              
                              <li id="officeNumber" class="list-group-item">office: ${element.officeNumber}</li>
                          </ul>
                      </div>
                  </div>`;
        Cards.push(div);
        break;

      case "engineer":
        console.log("element intern : ", element);
        var div = `<div class="card">
                                      <div class="card-header">
                                          <h6 id="employeeName">${element.name}</h6>
                                          <h6 id="jobTitle"><i class="fas fa-laptop-code"></i> engineer</h6>
                                      </div>
                                      <div class="card-body">
                                          <ul class="list-group">
                                              <li id="id" class="list-group-item">id: ${element.id}</li>
                                              <li id="email" class="list-group-item">email: <a href="mailto:${element.email}" target="_blank" rel="noopener noreferrer">${element.email}</a></li>
                                              <li id=githubName" class="list-group-item">github:  <a href="https://github.com/${element.githubName}" target="_blank">${element.githubName}</a> </li>
                                              
                                             
                                          </ul>
                                      </div>
                                  </div>`;
        Cards.push(div);
        break;

      case "intern":
        var div = `<div class="card">
                      <div class="card-header">
                          <h6 id="employeeName">${element.name}</h6>
                          <h6 id="jobTitle"><i class="fas fa-user-graduate"></i> intern</h6>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li id="id" class="list-group-item">id: ${element.id}</li>
                              <li id="email" class="list-group-item">email: <a href="mailto:${element.email}" target="_blank" rel="noopener noreferrer">${element.email}</a></li>
                              <li id="school" class="list-group-item">school: ${element.school}</li>
                          </ul>
                      </div>
                  </div>`;
        Cards.push(div);
        break;
      default:
        console.log("nothing to do");
    }
  });
  console.log(teammateProfile);
  writeHTML();
}

function writeHTML() {
  const htmlArray = [];
  const htmlStart = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./main/style.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;600&display=swap" rel="stylesheet">
  <title>${teammateProfile[0]}</title>
  </head>
   <body>
      <div class="jumbotron jumbotron-fluid">
        <h1>${teammateProfile[0]}</h1>
      </div>

      <div class="container">
       <div class="card-deck">`;

  htmlArray.push(htmlStart);

  for (let i = 1; i < teammateProfile.length; i++) {
    let object = `
            
         <div class='columns is-mobile is-centered'>
           <div class='column is-3 m-5'>
             <div class="card">
               <div class="card-content">
                 <ul>
                   <li>${teammateProfile[i].name}</li>
                   <li>${teammateProfile[i].title}</li>
                   <li>ID: ${teammateProfile[i].id}</li>
                   <p>Email: <a href="mailto:${teammateProfile[i].email}">${teammateProfile[i].email}</a></p>
                 </ul>
               </div>
             
           </div>
           `;

    if (teammateProfile[i].officeNumber) {
      object += `
             <p>Office Number: ${teammateProfile[i].officeNumber}</p>
             `;
    }
    if (teammateProfile[i].github) {
      object += `
             <p>GitHub: <a href="https://github.com/${teammateProfile[i].github}">${teammateProfile[i].github}</a></p>
             `;
    }
    if (teammateProfile[i].school) {
      object += `
             <p>School: ${teammateProfile[i].school}</p>
             
             `;
    }
    object += `
         </div>
         </div>  
         `;
    htmlArray.push(object);
  }

  const htmlEnd = `
       </div>
     </body>
   </html>
   `;
  htmlArray.push(htmlEnd);

  fs.writeFile(
    `./src/${teammateProfile[0]}.html`,
    htmlArray.join(""),
    function (err) {
      console.log(err);
    }
  );
}
init();
