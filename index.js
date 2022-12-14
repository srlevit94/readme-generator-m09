// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {   type: 'input',
        message: "Write a title of your project.",
        name: 'title',
        default:  'Default title', 
    },
    {   type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default:  'Default Description', 
    },
    {   type: 'input',
        message: "Write a installation instructions for your project.",
        name: 'install',
        default:  'Default installation', 
    },
    {   type: 'input',
        message: "Write usage information for your project.",
        name: 'usage',
        default:  'Default usage', 
    },
    {   type: 'input',
        message: "Write contribution guidelines for your project.",
        name: 'contribution',
        default:  'Default contribution guidelines', 
    },
    {   type: 'input',
        message: "Write contribution guidelines for your project.",
        name: 'test',
        default:  'Default test instructions', 
    },
    {   type: 'list',
        message: "Select a license for your project.",
        name: 'license',
        default:  'Default license', 
        choices: ['MIT', 'Lic2', 'Lic3']
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'user',
        default: 'srlevit94',
    },
    {
        type: 'input',
        message: "What is email address?",
        name: 'email',
        default: 'srlevit94@gmail.com',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
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

// .then(userInput => generateMarkdown(userInput))