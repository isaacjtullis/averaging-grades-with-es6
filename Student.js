// define your student class, here

// create a new student object
//let james = new Student("James", [80, 75.3, 90, 88, 70]);

// print the average grade to the console
//console.log(james.averageGrade());

// print the string representation of the student object
//console.log(james.toString());
"use strict";

class Student {
  constructor(studentName, studentGrades) {
    this.studentName = studentName;
    this.studentGrades = studentGrades;
    this.sum = 0
  }

  averageGrade() {
    let grades = this.studentGrades
    for (let grade of grades) {
      this.sum += grade;
    }
    return this.sum = (this.sum / grades.length);
  }

  toString() {
    return `${this.studentName} has an average grade of: ${this.sum}`
  }
}

let james = new Student("James", [80, 75.3, 90, 88, 70]);

console.log(james.averageGrade());
console.log(james.toString());
