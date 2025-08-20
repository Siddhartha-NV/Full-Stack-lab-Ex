var Student = /** @class */ (function () {
    function Student(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    Student.prototype.display = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Course: ").concat(this.course));
    };
    return Student;
}());
// Create object
var s1 = new Student(101, "Siddharth", "Angular");
s1.display();
