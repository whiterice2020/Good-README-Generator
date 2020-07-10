// function to generate markdown for README

function generateMarkdown(data) {
  return `

  # ${data.title}\n
  ![](https://img.shields.io/badge/License-${data.license}-brightgreen)\n

  # Description
  ${data.description}\n

  #Table of Contents
  * [Installation](#installation)
  * [TableOfContents](#tableOfContents)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Images](#image)
  * [Video](#video)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation\n
  ${data.installation}\n
  
  # Usage\n
  ${data.usage}\n
  
  # Images\n

  ${data.license}\n
  # License\n
  
  # Tests\n
  ${data.tests}\n
  
  # Questions\n
  ${data.questions}\n
  [Link to my GitHub](https://github.com/${data.username})\n
  If you have any quesitons, you can email me at ${data.email}\n
`;
}

module.exports = generateMarkdown;
