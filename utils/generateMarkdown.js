// Function to generate a license badge based on the selected license
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return ''; // Return an empty string for 'None'
}

// Function to generate a license link based on the selected license
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '[GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return ''; // Return an empty string for 'None'
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This application is covered under the ${renderLicenseLink(license)}.`;
  }
  return 'This application is not covered by any license.';
}

// Function to generate Markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please feel free to contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;