// simple class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    static fullName (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        return this.firstName + ' ' + this.lastName;
    }
}

// extend the class
class Employee extends Person {
    constructor (name, age, company) {
        super(name, age);
        this.company = company;
    }

    empDetails () {
        return super.fullName(this.firstName, this.lastName) + ' at ' + this.company
    }
}

const employee = new Employee('Satz', 'K', 'ApplePro IT Solutions');
var empDetails = employee.empDetails();
var fullName = employee.fullName();
fullName;
empDetails;