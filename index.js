const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Project Name: ",
      name: "project",
    },
    {
      type: "input",
      message: "Project Description: ",
      name: "description",
    },
    {
      type: "input",
      message: "Installation Instructions: ",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage Information: ",
      name: "usage",
    },
    {
      type: "input",
      message: "Contribution guidelines: ",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests: ",
      name: "tests",
    },
    {
      type: "list",
      message: "License: ",
      choices: ["ICS", "MIT", "Apache", "GNU GPLv3"],
      name: "license",
    },
    {
      type: "input",
      message: "GitHub Username: ",
      name: "username",
    },
    {
      type: "input",
      message: "Email Address: ",
      name: "email",
    }
  ])
  .then(function (response) {
    console.log(response.project);
    console.log(response.email);
  });
