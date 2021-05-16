const inquirer = require("inquirer");

inquirer
 .prompt([
     {
        type:"input", 
        name:"manager",
        message:"What is the team manager's name?"
 
     }
 ])
 .then(val =>{
    console.log(val.manager);
 })