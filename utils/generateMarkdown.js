// Creates a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license}](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  } else if (license === 'Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GNU General Public License v3.0') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if(license === 'No license') {
    return ``
  } else {
    return `Valid selection required`
  }
}


// a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(data) {
  if (!data.license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${data.license} license.`
  }
}

//a function to generate markdown for README
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