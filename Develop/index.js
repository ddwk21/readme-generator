// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

var markDown = '';
// TODO: Create an array of questions for user input
const questions = [
    {name: 'title', message:'Please enter title:',type:'input'},
    
    {name:'description',message:'Please describe your project:',type:'input'},
    
    {name:'install',message:'Install Instructions:',type:'input'},
    
    {name:'usage',message:'Usage information:',type:'input'},
    
    {name:'contribution',message:'Contribution Guidelines:',type:'input'},
    
    {name:'test',message:'Test Guidelines:',type:'input'},
    
    {name:'user',message:'Github Username:',type:'input'},
    
    {name:'email',message:'Email:',type:'input'}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFileSync(fileName,data)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => generateMarkdown(answers))
    .then((markdown) => writeToFile('README.md',markdown))
}

// Function call to initialize app
init();
