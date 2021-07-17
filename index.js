// Module Imports
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// Class Imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Template Imports
const pageTemplate = require('./src/page-template');

// Employee Containers
const managers = [];
const engineers = [];
const interns = [];

// All Employees Container
const employees = [];

// Main Employee Generator
const getTeamMember = () => {

    inquirer
        .prompt({
            name: 'role',
            message: "Which role would you like to build?",
            type: 'list',
            choices: ['Manager', 'Engineer', 'Intern', '_Exit_']
        })
        .then((data) => {

            switch(data.role) {
                case 'Manager':
                    getManager();
                    break;
                case 'Engineer':
                    getEngineer();
                    break;
                case 'Intern':
                    getIntern();
                    break;
                default:
                    for (let i = 0; i < managers.length; i++) {
                        employees.push(pageTemplate.generateManagers(managers[i]));
                    }
        
                    for (let i = 0; i < engineers.length; i++) {
                        employees.push(pageTemplate.generateEngineers(engineers[i]));
                    }
        
                    for (let i = 0; i < interns.length; i++) {
                        employees.push(pageTemplate.generateInterns(interns[i]));
                    }
        
                    fs.writeFile(path.join(__dirname, 'dist/example.html'), pageTemplate.generateTemplate(employees), (err) => {
                        if (err) throw err;
                    });
            }

        });

}

// Manager generator
const getManager = () => {

    let managerQuestions = [
        {
            name: 'firstName',
            message: "What is the manager's first name?",
            type: 'input'
        },
        {
            name: 'id',
            message: "What is the manager's id?",
            type: 'input' 
        },
        {
            name: 'email',
            message: "What is the manager's email?",
            type: 'input' 
        }, 
        {
            name: 'officeNumber',
            message: "What is the manager's office number?",
            type: 'input'
        }
    ]

    inquirer
        .prompt(managerQuestions)
        .then(data => {
            const firstName = data.firstName;
            const id = data.id;
            const email = data.email;
            const officeNumber = data.officeNumber;

            const manager = new Manager(firstName, id, email, officeNumber);

            managers.push(manager);
            getTeamMember();
        });

}

// Engineer generator
const getEngineer = () => {

    let engineerQuestions = [
        {
            name: 'firstName',
            message: "What is the engineer's first name?",
            type: 'input'
        },
        {
            name: 'id',
            message: "What is the engineer's id?",
            type: 'input' 
        },
        {
            name: 'email',
            message: "What is the engineer's email?",
            type: 'input' 
        }, 
        {
            name: 'github',
            message: "What is the engineer's github username?",
            type: 'input'
        }
    ]

    inquirer
        .prompt(engineerQuestions)
        .then(data => {
            const firstName = data.firstName;
            const id = data.id;
            const email = data.email;
            const github = data.github;

            const engineer = new Engineer(firstName, id, email, github);
            engineers.push(engineer);
            console.log(engineers);
            getTeamMember();
        });

}

// Intern generator
const getIntern = () => {

    let internQuestions = [
        {
            name: 'firstName',
            message: "What is the intern's first name?",
            type: 'input'
        },
        {
            name: 'id',
            message: "What is the intern's id?",
            type: 'input' 
        },
        {
            name: 'email',
            message: "What is the intern's email?",
            type: 'input' 
        }, 
        {
            name: 'school',
            message: "What school did the intern go to?",
            type: 'input'
        }
    ]

    inquirer
        .prompt(internQuestions)
        .then(data => {
            const firstName = data.firstName;
            const id = data.id;
            const email = data.email;
            const school = data.school;

            const intern = new Intern(firstName, id, email, school);
            interns.push(intern);
            console.log(interns);
            getTeamMember();
        });

}

// Creates a Team Member
getTeamMember();

// console.log(__dirname);
