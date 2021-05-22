//Import class Employee
const Employee = require('./Employee');
//Create a Engineer child class to extend Employee class
class Engineer extends Employee {
    //Define constructor
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
  
    }
    //Define method getGithub to return Github
    getGithub(){
        return this.github;
        
    }
    //Override method getRole to return Role
    getRole(){
        return 'Engineer';
    }
}
//Export engineer class
module.exports = Engineer;