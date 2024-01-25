const inquirer = require('inquirer');
const fs = require('fs');
var badge

const generateREADME = ({ title, description, installation, usage, license, contribute, tests, github, email }) =>

  `# ${title}

## Description

${description}

${badge}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Contribute

${contribute}

## Tests

${tests}

## Questions

GitHub profile can be found at: https://github.com/${github}

For questions about this project please send an e-mail to: ${email}

## License

License used for this project: ${license}`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Use the up and down arrows to select which license would you like to add?',
      choices: ['Apache', 'GNU', 'MIT', 'ISC', 'None'],

    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please provide instructions on how you would like other developers to contribute to your project.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe some tests that were run for you project.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your GitHub user name.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide an e-mail addess that you would like questions about your project sent to.',
    },
  ])

  .then((answers) => {
    if (answers.license == "Apache") {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      return answers
    }
    if (answers.license == "GNU") {
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      return answers
    }
    if (answers.license == "MIT") {
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      return answers
    }
    if (answers.license == "ISC") {
      badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      return answers
    }
    if (answers.license == "None") {
      badge = ``
      return answers
    }
  })
  .then((answers) => {
    const readMePageContent = generateREADME(answers);

    fs.writeFile('./Example/README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
