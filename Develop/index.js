// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const pictures = fs.readdirSync('../screenshots');

// TODO: Create an array of questions for user input
const questions = [
    //Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?'
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Give a thorough description of the project'
    }
    //Installation

    //Usage

    //Credits

    //License (can leave empty)

    //Features

    //How To Contribute (default is contributer covenant)
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
        .catch((err) => {
            console.log(err);
        })
        console.log('README created!');
        console.log(pictures);
        
        
}

// Function call to initialize app
init();
