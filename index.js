// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer=require("inquirer");
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        name:"title",
        message: "What is the title of your project?",
        type:"text",
    },
    {
        name:"Description",
        message:"What is a discription of your project?",
        type:"text"
    },
    {
        name:"Installation",
        message:"What are the installations?",
        type:"text"
    },
    {
        name:"Usage",
        message:"Usage?",
        type:"text"
    },
    {
        name:"Credits",
        message:"Credits?",
        type:"text"
    },
    {
        name:"License",
        message:"License?",
        type:"list",
        choices: ['MIT', 'Apache', 'No License']
    },
    {
        name:"Email",
        message:"What is your email?",
        type:"input",
     
    },
    {
        name:"GitHub",
        message:"What is your GitHub username?",
        type:"input",
     
       
    }


]).then(response=>{
    console.log(JSON.stringify(response));


const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);


const READMEE =
`# ${response.title}


## Description
${response.Description}


-[Itstallation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)




## Installation:
 ${response.Installation}
## Usage:
 ${response.Usage}
## Credits:
 ${response.Credits}
## License:
 ${response.License}


# Questions:
* Email: ${response.Email}
* GitHub: ${response.GitHub}
        `
       
        fs.writeFile('READMEE.md', READMEE, (err)=>
        err ? console.error(err) : console.log('Commit logged'));
         for(const outputCyanText of READMEE){
            console.log( '\x1b[36m%s\x1b[0m',outputCyanText);
          }
})
