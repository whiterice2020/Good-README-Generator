


// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```



// * The generated README includes 1 badge that's specific to the repository.
var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// inquirer.prompt([
  const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your username on Github?"
  },
  {
    type: "input",
    name: "Title",
    message: "What is the Title of your Project?"
  },
  
  {
    type: "input",
    name: "Description",
    message: "Write a description of your project?"
  },

  {
    type: "checkbox",
    message: "Do you want a Table of Contents?",
    name: "TableOfContents",
    choices: [
      "Yes", 
      "No", 
    ]
  },
  
  {
    type: "input",
    name: "Installation",
    message: "Write directions on how to install "
  },
  
  {
    type: "input",
    name: "Usage",
    message: "Write a description on the Usage "
  },
  
  {
    type: "input",
    name: "License",
    message: "Noteate here for any licencing "
  },
  
  {
    type: "input",
    name: "Contributing",
    message: "Write down any contributors "
  },
  
  {
    type: "input",
    name: "Tests",
    message: "Describe any testing that was done "
  },
  
  {
    type: "input",
    name: "Questions",
    message: "??? "
  },
] 
// // function to write README file
// function writeToFile(fileName, data) {
// }

inquirer.prompt(questions)

  .then(function (data) {

  var filename = data.Title.toLowerCase().split(' ').join('') + ".md";

  fs.writeFile(filename, generateMarkdown(data), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("README file has been successfully generated.");

  });
});


function writeToFile(filename, data) {}


// function to initialize program
function init() {}

// function call to initialize program
// init();




