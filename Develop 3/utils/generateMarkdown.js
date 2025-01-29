// TODO: Create a function that returns a license badge based on which license is passed in
const addLicenseBadge = license => {
  if (license) {
      return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`;
  } else {
      return '';
  }
};
const createDescription = (title, description, link) => {
  if (link) {
      return `${description}
          
View the deployed page at [${title}](${link}).`;
  } else {
      return `${description}`;
  }
};
const createTableOfContents = contentsArr => {
  let contentsList = '';
  contentsArr.forEach((item) => {

     
      if (item.content && item.header === 'Screenshots') {
      contentsList += `   * [${item.header}](#${(item.header).toLowerCase()})
`;
      } else if (item.content) {
          contentsList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
`;
      }
  });
  return contentsList;
};

const createInstallation = install => {
  if (install) {
      return `To use this application, please install: 
\`\`\`
${install}
\`\`\``
  } else {
      return '';
  }
};

const createScreenshots = screenshotItem => {
  let allScreenshots = '';
  if (screenshotItem) {
      screenshotItem.forEach(shot => {
      allScreenshots += `![${shot.screenshotAlt}](${shot.screenshotLink})
${shot.screenshotDesc}
`;
  });
  return `${allScreenshots}`;
  } else {
      return '';
  }
};

const createBuiltWith = builtWith =>{
  let allTechnologies = '';

  if (builtWith) {
      builtWith.forEach(item => {
          allTechnologies += `
* ${item}`
      });
      return `${allTechnologies}`;
  } else {
      return '';
  };
};
const createLicense = license => {
  if (license) {
      return `This application is licensed under the ${license} license.`;
  } else {
      return '';
  }
};

const createQuestions = (email, github, repo) => {
  if (email) {
      return `If you have any questions about the repo, please [open an issue](https://github.com/${github}/${repo}/issues) or contact me via email at ${email}. You can find more of my work on my GitHub, [${github}](https://github.com/${github}/).`
  } else {
      return '';
  }
};

function generateMarkdown(data) {
  const { title, github, repo, license } = data;
  let readmeContents = '';
  const sectionArr = [
      {
          header: 'Installation',
          content: createInstallation(data.installation)
      },
      {
          header: 'Usage',
          content: createUsage(data.usage)
      },
      {
          header: 'Screenshots',
          content: createScreenshots(data.screenshots)
      },
      {
          header: 'Built With',
          content: createBuiltWith(data['built with'])
      },
      {
          header: 'License',
          content: createLicense(license)
      }

  ];

  sectionArr.forEach((sectionItem) => {
      if (sectionItem.content && sectionItem.header === 'Screenshots') {
          readmeContents += `### ${sectionItem.header}
${sectionItem.content}
`
      } else if (sectionItem.content) {
      readmeContents += `## ${sectionItem.header}
${sectionItem.content}
  
`;
      }
  });
  return `# ${data.title}
${readmeContents}`;
}

export default generateMarkdown;

