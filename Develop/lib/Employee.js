//Create a Employee parent class

class Employee {
    //Define constructor
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Define method getName to return name
    getName() {
        return this.name;
    }
    //Define method getId to return id
    getId(){
        return this.id;
    }
    //Define method getEmail to return email
    getEmail(){
        return this.email;
    }
    //Define method getRole to return role
    getRole(){
        return 'Employee';
    }
}

//Export employee class
module.exports = Employee;