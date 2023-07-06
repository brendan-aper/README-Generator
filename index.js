const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown")
const dayjs = require('dayjs')

console.log(markDown)

const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "Enter a short description of the project.",
      name: "description",
    },
    {
      type: "input",
      message: "What is needed to install the project?",
      name: "install",
    },
    {
      type: "input",
      message: "How do you use the project?",
      name: "usage",
    },
    {
      type: "input",
      message: "List any guidelines for how you would like people to contribute to the property.",
      name: "contribute",
    },
    {
      type: "input",
      message: "List any instructions for how to test the project.",
      name: "test",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your github user name?",
      name: "github",
    },
    {
      type: "list",
      message: "What license is this project under?",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GPLv2", "BSD 3-Clause", "Unlicense"]
    },
  ];





function init() {
  return inquirer.prompt(questions)
  .then((data) => {
    const mark = markDown(data)
    fs.writeFile('newREADME.md', mark, (err) => {
      err ? console.error("Couldn't Create README") : console.log("README Created")
    })
    return data
  })
  .catch((error => {
    console.error(error)
  }))
}

init();
