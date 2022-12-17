// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


//  array of questions for user input
const questions = [
    {   type: 'input',
        message: "Write a title of your project.",
        name: 'title',
        default:  'Sample title', 
    },
    {   type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default:  'Sample Description', 
    },
    {   type: 'input',
        message: "Write a installation instructions for your project.",
        name: 'install',
        default:  'Sample installation instructions', 
    },
    {   type: 'input',
        message: "Write usage information for your project.",
        name: 'usage',
        default:  'Sample usage information', 
    },
    {   type: 'input',
        message: "Write contribution guidelines for your project.",
        name: 'contribution',
        default:  'Sample contribution guidelines', 
    },
    {   type: 'input',
        message: "Write test instructions for your project.",
        name: 'test',
        default:  'Sample test instructions', 
    },
    {   type: 'list',
        message: "Select a license for your project.",
        name: 'license',
        default:  'MIT', 
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0', '']
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'user',
        default: 'sampleusername',
    },
    {
        type: 'input',
        message: "What is email address?",
        name: 'email',
        default: 'myemail@.provider.com',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(' README successfully generated!')
    );
}  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const fileName = `${response.title.toLowerCase()}.md`
        const content = generateMarkdown(response)
        writeToFile(fileName, content)
    })
}

// Function call to initialize app
init()

