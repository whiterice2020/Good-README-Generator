// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}\n

  # Description
  ${data.description}\n

  #Table of Contents
  *[Installation](#installation)
  *[TableOfContents](#TableOfContents)
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Tests](#Tests)
  *[Questions](#Questions)
  
  # Installation\n
  ${data.installation}\n
  
  # TableOfContents\n
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
