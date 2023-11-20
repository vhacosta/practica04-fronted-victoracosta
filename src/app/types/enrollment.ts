import {Course} from "./course";
import {Student} from "./student";

export class Enrollment {
    id: number;
    course: Course;
    student: Student;
    pay: boolean;

    constructor(id: number, course: Course, student: Student, pay: boolean) {
        this.id = id;
        this.course = course;
        this.student = student;
        this.pay = pay;
    }
}
