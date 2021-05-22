//Import class Employee
const Employee = require('./Employee');

//Create a Manager child class to extend Employee class
class Manager extends Employee {
    //Define constructor
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;   
    }
    //Define method getOfficeNumber to return OfficeNumber
    getOfficeNumber(){
        return this.officeNumber;
    }
    //Override method getRole to return Role
    getRole(){
        return 'Manager';
    }
}

//Export manager class
module.exports = Manager;