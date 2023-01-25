const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//constructor
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require('./util/generatehtml');

// Team members array
const teamMembers = [];

// Create empty arrays for team and id as place holders
const teamArr = [];
const idArr = [];

// Manager
function addManager() {
    inquirer
       .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: managerName => {
                    if (managerName !== "") {
                        return true;
                    }
                    return "Please enter the team's manager's name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's ID?",
                validate: managerId => {
                    if (managerId !== "") {
                        return true;
                    }
                    return "Please enter a valid Manager's ID.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
                validate: managerEmail => {
                    if (managerEmail !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }

//Engineer
function addEngineer() {
    inquirer
        .prompt([
             {
                 type: "input",
                 name: "engineerName",
                 message: "What is the engineer's name?",
                 validate: engineerName => {
                    if (engineerName !== "") {
                        return true;
                    }
                    return "Name can't be left empty.";
                }
                },
                {
                 type: "input",
                 name: "engineerId",
                 message: "What is the engineer's ID?",
                 validate: engineerId => {
                    if (engineerId !== "") {
                        return true;
                    }
                    return "Please enter a valid ID.";
                }
                },
                {
                 type: "input",
                 name: "engineerEmail",
                 message: "What is the engineer's email?",
                 validate: engineerEmail => {
                    if (engineerEmail !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
                },
                {
                 type: "input",
                 name: "engineerGithub",
                 message: "What is the engineer's GitHub username?",
                 validate: engineerGithub => {
                    if (engineerGithub !== "") {
                        return true;
                    }
                    return "Please enter the GitHub username.";
                }
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamArr.push(engineer);
                idArr.push(answers.engineerId);
                addTeam();
            });
//Intern
function addIntern() {
    inquirer
       .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
                validate: internName => {
                    if (internName !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's ID?",
                validate: internId=> {
                    if (internId !== "") {
                        return true;
                    }
                    return "Please enter a valid ID.";
                }
                },
                {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?",
                validate: internEmail => {
                    if (internEmail !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
                },
                {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?",
                validate: internSchool => {
                    if (internSchool !== "") {
                        return true;
                    }
                    return "Please enter a correct school.";
                }
                }
 
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamArr.push(intern);
                idArr.push(answers.internId);
                addTeam();
            });
        }
