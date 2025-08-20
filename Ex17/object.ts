class Student {
    id: number;
    name: string;
    course: string;

    constructor(id: number, name: string, course: string) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    display(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Course: ${this.course}`);
    }
}

// Create object
let s1 = new Student(101, "Siddharth", "Angular");
s1.display();
