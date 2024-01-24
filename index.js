const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, contents, installation, usage, license, contribute, tests, questions, }) =>

`# <${title}>

## Description

${description}Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

${contents}If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

${usage}Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![alt text](assets/images/screenshot.png)

## License

${license}The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## How to Contribute

${contribute}If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${tests}Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

${questions}If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`

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
      type: 'input',
      name: 'license',
      message: 'What license, if any, would you like to add?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please provide instructions on how you would like other developers to contribute to your project.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe some tests that were run for you project..',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please provide an e-mail addess that you would like questions about your project sent to.',
    },
  ])
  .then((answers) => {
    const readMePageContent = generateREADME(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
