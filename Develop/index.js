// TODO: Include packages needed for this application

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
        message: "Write a description of your project.",
        name: 'description',
        default:  'Default Description', 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README successfully generated.")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
