const fs = require('fs');
const inquirer = require('inquirer');

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
                default:
                    console.log('Please enter a valid name');
            }

        });

}

const getManager = () => {

    inquirer
        .prompt({
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            type: 'input'
        });

}

const getEngineer = () => {

    inquirer
        .prompt({
            name: 'github',
            message: "What is the Engineer's Github username?",
            type: 'input'
        });

}

const getIntern = () => {

    inquirer
        .prompt({
            name: 'school',
            message: "What school did the intern go to?",
            type: 'input'
        });

}

getTeamMember();