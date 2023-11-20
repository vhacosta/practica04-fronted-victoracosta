export class Grade {
    id: number;
    studentId: number;
    courseId: number;
    value: number;

    constructor(id: number, studentId: number, courseId: number, value: number) {
        this.id = id;
        this.studentId = studentId;
        this.courseId = courseId;
        this.value = value;
    }
}
