var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

  const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your Project?"
  },
  
  {
    type: "input",
    name: "username",
    message: "What is your username on Github?"
  },
  
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },

  {
    type: "input",
    name: "description",
    message: "Write a description of your project?"
  },

  {
    type: "input",
    name: "installation",
    message: "Write directions on how to install "
  },
  
  {
    type: "input",
    name: "usage",
    message: "Write a description on the Usage "
  },
  
  {
    type: "list",
    name: "license",
    choices: [
      "Shareware",
      "OpenSource",
      "Subscription"
    ]
  },
  
  {
    type: "input",
    name: "contributing",
    message: "Write down any contributors "
  },
  
  {
    type: "input",
    name: "tests",
    message: "Describe any testing that was done "
  },
  
  {
    type: "input",
    name: "questions",
    message: "List any questions you may have here.  If you do not have any questions, press enter."
  },
] 
// // function to write README file
// function writeToFile(fileName, data) {
// }

inquirer.prompt(questions)
  .then(function (data) {

      var filename = data.title.toLowerCase().split(' ').join('') + ".md";

      fs.writeFile(filename, generateMarkdown(data), function(err) {

        if (err) {
          return console.log(err);
        }

        console.log("README file has been successfully generated.");

      });
});

// function to initialize program
function writeToFile(filename, data) {}



// function init() {}

// function call to initialize program
// init();




