// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const pictures = () => fs.readdirSync('./screenshots');

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
    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Give a quick rundown of how to install the software'
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Give some insight on how to use the software'
    },
    //Credits
    {
        type: 'input',
        name: 'credits',
        message: 'State what and who helped create this'
    },
    //License (can leave empty)
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: [
            'MIT',
            'GNU GPLv3',
            'Attribution 4.0 International'
        ]
    },
    //Features
    {
        type: 'input',
        name: 'features',
        message: 'List some of the features'
    },
    //How To Contribute (default is contributer covenant)
    {
        type: 'input',
        name: 'contribute',
        message: 'Give a rundown on how to contribute (default is the contributer covenant)'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            fs.writeFile('README.md', generateMarkdown(answers) , err =>{
                if(err){
                    console.log(err);
                }
                console.log("README created!")
            })            
        })
        .catch((err) => {
            if(err){
                console.log(err);
            }
        });
    

}

// Function call to initialize app
init();
