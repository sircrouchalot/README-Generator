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
    const { project, description, installation, usage, contributing, tests, license, username, email } = response;
    
    var readmeContent = `
# ${project}

## Table of Contents
    
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [License](#License)
7. [Questions](#Questions)
    
## Description
    
${description}
    
## Installation

\`\`\`
${installation}
\`\`\`
    
## Usage
    
${usage}
    
## Contributing
    
${contributing}
    
## Tests

\`\`\`
${tests}
    
\`\`\`
## License
    
${license}
    
## Questions

Got Questions? Contact me here: 

GitHub Username: ${username}

Email: ${email}
`

    fs.writeFile("./assets/README.md", readmeContent, function(err) {
      if (err) {
        throw err;
      }


    })
  });
