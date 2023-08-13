// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs'); // For file system operations
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing README file:', err);
        } else {
          console.log('README file generated successfully!');
        }
      });
}


function init() {
    inquirer.prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}


init();
