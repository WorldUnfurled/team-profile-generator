const fs = require('fs');
const inquirer = require('inquirer');

const builder = () => {

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
                    console.log('Manager');
                    break;
                case 'Engineer':
                    console.log('Engineer');
                    break;
                case 'Intern':
                    console.log('Intern');
                    break;
                default:
                    console.log('Please enter a valid name');
            }

        });

}

builder();