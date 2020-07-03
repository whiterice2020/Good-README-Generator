// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}\n

  # Description
  ${data.description}\n

  #Table of Contents
  * [Installation](#installation)
  * [TableOfContents](#tableOfContents)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation\n
  ${data.installation}\n
  
  # Usage\n
  ${data.usage}\n
  
  # License\n
  ${data.license}\n
  
  # Tests\n
  ${data.tests}\n
  
  # Questions\n
  ${data.questions}\n

`;
}

module.exports = generateMarkdown;
