// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is your project title name?',
    name: 'name',
    },
    {
    type: 'input',
    message: 'What is the description of your project',
    name: 'description',
    },
    {
    type: 'input',
    message: 'What is the installation instructions for your project',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'What is the usage information of your project',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'What is the contribution guidelines to your project',
    name: 'contribution',
    },
    {
    type: 'input',
    message: 'What is the test instructions for your project',
    name: 'tests',
    },
    {
    type: 'input',
    message: 'What are the features of your project',
    name: 'features',
    },
    {
    type: 'list',
    message: 'Select your license from the list?',
    name: 'license',
    choices: [
    'Apache', 
    'MIT', 
    'GNU', 
    "BSD", 
    'Boost', 
    'Mozilla', 
    'Unlicense'
    ]
    },
    {
    type: 'input',
    message: 'What is your github username',
    name: 'github',
    },
    {
    type: 'input',
    message: 'What is your linkedin URL',
    name: 'linkedin',
    },
    {
    type: 'input',
    message: 'What is your email address',
    name: 'email',
    },
];


function writeToFile(fileName, data) {
    let rmMarkDown = generateMarkdown(data);
    fs.appendFile(fileName, rmMarkDown, 'utf-8', (err) =>
      err ? console.error(err) : console.log('ReadMe successfully created!')
    );
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('USERREADME.md', response);
    })
    .catch();
}

// Function call to initialize app
init();
