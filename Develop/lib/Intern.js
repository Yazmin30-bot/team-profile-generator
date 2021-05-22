//Import class Employee
const Employee = require('./Employee');
//Create a Intern child class to extend Employee class
class Intern extends Employee {
    //Define constructor
    constructor(name, id, email,school){
        super(name,id,email);
        this.school = school;
    }
    //Define method getSchool to return School
    getSchool(){
        return this.school;
    }
    //Override method getRole to return Role
    getRole(){
        return 'Intern';
    }
}
//Export engineer class
module.exports = Intern;