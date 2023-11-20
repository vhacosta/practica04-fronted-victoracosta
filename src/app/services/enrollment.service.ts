import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Enrollment} from "../types/enrollment";

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    private enrollments: Enrollment[] = [
        {id: 1, course: {
                id: 101, name: 'Mathematics',
                code: '',
                description: ''
            }, student: {
                id: 201, name: 'John Doe',
                birthdate: '',
                phone: '',
                address: '',
                email: ''
            }, pay: true},
        {id: 2, course: {
                id: 102, name: 'History',
                code: '',
                description: ''
            }, student: {
                id: 202, name: 'Jane Smith',
                birthdate: '',
                phone: '',
                address: '',
                email: ''
            }, pay: false},
        {id: 3, course: {
                id: 103, name: 'Physics',
                code: '',
                description: ''
            }, student: {
                id: 203, name: 'Alice Johnson',
                birthdate: '',
                phone: '',
                address: '',
                email: ''
            }, pay: true},
        {id: 4, course: {
                id: 104, name: 'Chemistry',
                code: '',
                description: ''
            }, student: {
                id: 204, name: 'Bob Brown',
                birthdate: '',
                phone: '',
                address: '',
                email: ''
            }, pay: false},
        {id: 5, course: {
                id: 105, name: 'English',
                code: '',
                description: ''
            }, student: {
                id: 205, name: 'Eva White',
                birthdate: '',
                phone: '',
                address: '',
                email: ''
            }, pay: true},
    ];

    constructor() {
    }

    getEnrollments(): Observable<Enrollment[]> {
        return of(this.enrollments);
    }

    getEnrollmentById(id: number) {
        const enrollment = this.enrollments.find(e => e.id === id);
        return of(enrollment);
    }

    createEnrollment(enrollment: Enrollment | undefined): Observable<Enrollment> {
        // @ts-ignore
        enrollment.id = this.generateId();
        if (enrollment instanceof Enrollment) {
            this.enrollments.push(enrollment);
        }
        // @ts-ignore
        return of(enrollment);
    }

    updateEnrollment(enrollment: Enrollment | undefined): Observable<Enrollment> {
        // @ts-ignore
        const index = this.enrollments.findIndex(e => e.id === enrollment.id);
        if (index !== -1) {
            if (enrollment instanceof Enrollment) {
                this.enrollments[index] = enrollment;
            }
            // @ts-ignore
            return of(enrollment);
        } else {
            throw new Error('Enrollment not found');
        }
    }

    deleteEnrollment(id: number) {
        const index = this.enrollments.findIndex(enrollment => enrollment.id === id);
        if (index !== -1) {
            this.enrollments.splice(index, 1);
            return of(null);
        } else {
            throw new Error('Enrollment not found');
        }
    }

    private generateId(): number {
        const ids = this.enrollments.map(enrollment => enrollment.id);
        return Math.max(...ids) + 1;
    }

    getEnrollmentsWithNames(): Observable<Enrollment[]> {
        return of(this.enrollments);
    }
}
