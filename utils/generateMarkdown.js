// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return ""
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${renderLicenseBadge(data.title)}
`;
}


module.exports = generateMarkdown;
