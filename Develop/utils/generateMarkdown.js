// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none' && license !== 'GNU LGPL') {
    return `![Project License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  } else if (license === 'GNU LGPL') {
    return `![Project License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ***
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions about the project you can reach out to me via email or GitHub with the information below. 
  >Email: ${data.email} 
  >GitHub : [${data.user}](https://github.com/${data.user})

`;
}

module.exports = generateMarkdown;
