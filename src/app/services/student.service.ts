import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Student} from "../types/student";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private students: Student[] = [
        { id: 1, name: 'John Doe', birthdate: ('1995-02-15'), phone: '123-456-7890', address: '123 Main St', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', birthdate: ('1993-07-22'), phone: '987-654-3210', address: '456 Oak St', email: 'jane.doe@example.com' },
        { id: 3, name: 'Alice Smith', birthdate: ('1998-04-10'), phone: '555-123-4567', address: '789 Pine St', email: 'alice.smith@example.com' },
        { id: 4, name: 'Bob Johnson', birthdate: ('1990-12-05'), phone: '333-555-9999', address: '101 Elm St', email: 'bob.johnson@example.com' },
        { id: 5, name: 'Eva Williams', birthdate: ('1997-09-18'), phone: '111-222-3333', address: '202 Cedar St', email: 'eva.williams@example.com' },
        { id: 6, name: 'Michael Brown', birthdate: ('1994-01-30'), phone: '777-888-9999', address: '303 Birch St', email: 'michael.brown@example.com' },
        { id: 7, name: 'Olivia Davis', birthdate: ('1996-06-14'), phone: '444-777-2222', address: '404 Maple St', email: 'olivia.davis@example.com' },
        { id: 8, name: 'Daniel Wilson', birthdate: ('1992-03-08'), phone: '666-999-1111', address: '505 Redwood St', email: 'daniel.wilson@example.com' },
        { id: 9, name: 'Sophia Rodriguez', birthdate: ('1999-11-25'), phone: '999-111-4444', address: '606 Pineapple St', email: 'sophia.rodriguez@example.com' },
        { id: 10, name: 'Alexander Martinez', birthdate: ('1991-08-12'), phone: '222-333-5555', address: '707 Oakwood St', email: 'alexander.martinez@example.com' },
        { id: 11, name: 'Emma Taylor', birthdate: ('1993-05-02'), phone: '888-444-6666', address: '808 Cedarwood St', email: 'emma.taylor@example.com' },
        { id: 12, name: 'Jackson Brown', birthdate: ('1997-02-19'), phone: '777-555-3333', address: '909 Birchwood St', email: 'jackson.brown@example.com' },
        { id: 13, name: 'Ava Garcia', birthdate: ('1994-10-09'), phone: '555-888-2222', address: '010 Pine Lane', email: 'ava.garcia@example.com' },
        { id: 14, name: 'Logan Davis', birthdate: ('1996-12-27'), phone: '444-999-7777', address: '121 Elm Lane', email: 'logan.davis@example.com' },
        { id: 15, name: 'Isabella Miller', birthdate: ('1998-07-16'), phone: '111-777-4444', address: '232 Oak Lane', email: 'isabella.miller@example.com' },
        { id: 16, name: 'Mia Anderson', birthdate: ('1990-04-03'), phone: '333-222-8888', address: '343 Cedar Lane', email: 'mia.anderson@example.com' },
        { id: 17, name: 'Lucas Martinez', birthdate: ('1995-09-21'), phone: '666-111-5555', address: '454 Redwood Lane', email: 'lucas.martinez@example.com' },
        { id: 18, name: 'Grace White', birthdate: ('1999-01-11'), phone: '888-333-4444', address: '565 Pineapple Lane', email: 'grace.white@example.com' },
        { id: 19, name: 'Carter Johnson', birthdate: ('1992-06-28'), phone: '222-444-6666', address: '676 Oakwood Lane', email: 'carter.johnson@example.com' },
        { id: 20, name: 'Lily Smith', birthdate: ('1994-03-14'), phone: '777-444-5555', address: '787 Cedarwood Lane', email: 'lily.smith@example.com' }
    ];

    constructor() {}

    getStudents(): Observable<Student[]> {
        return of(this.students);
    }

    getStudentById(id: number) {
        const student = this.students.find(s => s.id === id);
        return of(student);
    }

    createStudent(student: Student): Observable<Student> {
        student.id = this.generateId();
        this.students.push(student);
        return of(student);
    }

    updateStudent(student: Student): Observable<Student> {
        const index = this.students.findIndex(s => s.id === student.id);
        if (index !== -1) {
            this.students[index] = student;
            return of(student);
        } else {
            throw new Error('Student not found');
        }
    }

    deleteStudent(id: number) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
            return of(null);
        } else {
            throw new Error('Student not found');
        }
    }

    private generateId(): number {
        const ids = this.students.map(student => student.id);
        return Math.max(...ids) + 1;
    }
}
