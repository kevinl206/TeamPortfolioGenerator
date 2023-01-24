const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//constructor
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const OUTPUT_DIR = path.resolve(__dirname, "output");

// Manager
function addManager() {
    inquirer
       .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            }
       ])};

//Engineer
function addEngineer() {
    inquirer
        .prompt([
             {
                 type: "input",
                 name: "name",
                 message: "What is the engineer's name?"
                },
                {
                 type: "input",
                 name: "id",
                 message: "What is the engineer's ID?"
                },
                {
                 type: "input",
                 name: "email",
                 message: "What is the engineer's email?"
                },
                {
                 type: "input",
                 name: "github",
                 message: "What is the engineer's GitHub username?"
                }
        ])};

//Intern
function addIntern() {
    inquirer
       .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's ID?"
                },
                {
                type: "input",
                name: "email",
                message: "What is the intern's email?"
                },
                {
                type: "input",
                name: "school",
                message: "What school does the intern attend?"
                }
        ])};
