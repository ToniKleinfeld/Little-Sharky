class Person {
    firstName;
    lastName;

    constructor(firstName,lastName) {
        
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}