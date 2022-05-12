


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return 'https://img.shields.io/badge/license-MIT-brightgreen';
  }
  if(license === 'GNU GPLv3'){
    return 'https://img.shields.io/badge/license-GNU%20GPLv3-orange';
  }
  if(license === 'Attribution 4.0 International'){
    return 'https://img.shields.io/badge/license-Attribution%204.0%20International-lightgrey';
  }
  if(!license){
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return 'https://opensource.org/licenses/MIT';
  }
  if(license === 'GNU GPLv3'){
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
  if(license === 'Attribution 4.0 International'){
    return 'https://creativecommons.org/licenses/by/4.0/';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'){
    return 'https://opensource.org/licenses/MIT';
  }
  if(license === 'GNU GPLv3'){
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
  if(license === 'Attribution 4.0 International'){
    return 'https://creativecommons.org/licenses/by/4.0/';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # <Your-Project-Title>

  ## Description
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How To Contribute](#how)
  
  ## Installation
  
  ## Usage
  
  ## Credits
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Features
  
  ## How to Contribute
  
`;
}

module.exports = generateMarkdown;
