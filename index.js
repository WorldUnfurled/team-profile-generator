const fs = require('fs');
const inquirer = require('inquirer');

const getManager = () => {

    inquirer
        .prompt({
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            type: 'input'
        });

}

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
                    break;
                case 'Intern':
                    break;
                default:
                    console.log('Please enter a valid name');
            }

        });

}

getTeamMember();