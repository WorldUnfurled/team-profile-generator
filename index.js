const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt({
        name: 'firstRole',
        message: "Which role would you like to build first?",
        type: 'list',
        choices: ['Manager', 'Engineer', 'Intern']
    })