const inquirer = require('inquirer');

inquirer
    .prompt(
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter a name for your engineer'
        },
        
    );