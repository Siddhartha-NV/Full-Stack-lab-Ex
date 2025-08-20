// Parent Class
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): void {
        console.log(`Hello, I am ${this.name}`);
    }
}

// Child Class
class Employee extends Person {
    jobTitle: string;
    constructor(name: string, jobTitle: string) {
        super(name);
        this.jobTitle = jobTitle;
    }

    work(): void {
        console.log(`${this.name} works as a ${this.jobTitle}`);
    }
}

// Usage
let emp = new Employee("Siddhu", "Software Engineer");
emp.greet();
emp.work();
