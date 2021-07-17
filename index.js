// Module Imports
const fs = require('fs');
const inquirer = require('inquirer');

// Class Imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Employee Container
const teamMembers = [];

// Main Employee Generator
const getTeamMember = () => {

    inquirer
        .prompt({
            name: 'role',
            message: "Which role would you like to build first?",
            type: 'list',
            choices: ['Manager', 'Engineer', 'Intern']
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

            teamMembers.push(manager);
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
            teamMembers.push(engineer);
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
            teamMembers.push(intern);
        });

}

// Creates a Team Member
getTeamMember();
