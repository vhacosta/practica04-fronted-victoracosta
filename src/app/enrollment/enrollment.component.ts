import { Component } from '@angular/core';
import {EnrollmentService} from "../services/enrollment.service";
import {StudentService} from "../services/student.service";
import {CourseService} from "../services/course.service";
import {Enrollment} from "../types/enrollment";

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent {
  enrollments: Enrollment[] = [];

  constructor(
      private enrollmentService: EnrollmentService,
      private studentService: StudentService,
      private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.loadEnrollments();
  }

  loadEnrollments(): void {
    this.enrollmentService.getEnrollmentsWithNames().subscribe(
        enrollments => this.enrollments = enrollments,
        error => {
          console.error('Error loading enrollments', error);
        }
    );
  }

    deleteEnrollment(enrollmentId: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta matricula?')) {
      this.enrollmentService.deleteEnrollment(enrollmentId).subscribe(
          () => this.loadEnrollments(),
          error => {
            console.error('Error deleting course', error);
          }
      );
    }
  }
}
