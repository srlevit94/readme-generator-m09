// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// const generateMarkdown = require('.Develop/utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'srlevit94',
    },
    {
        type: 'input',
        message: "What is the name of your target GitHub repo?",
        name: 'repo',
        default: 'readme-generator-m09',
    },
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
        name: 'installation',
        default:  'Default installation', 
    },
    {   type: 'input',
        message: "Write a usage information for your project.",
        name: 'usage',
        default:  'Default usage', 
    },
    {   type: 'input',
        message: "Write a test instructions for your project.",
        name: 'test',
        default:  'Default test', 
    },
    {   type: 'input',
        message: "Select a license for your project.",
        name: 'license',
        default:  'Default license', 
        choices: ['MIT', 'Lic2', 'Lic3']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then((response) => {
        const fileName = `${response.title.toLowerCase()}.md`;
        fs.appendFile(fileName, JSON.stringify(response, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();