import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EnrollmentService} from "../../services/enrollment.service";
import {StudentService} from "../../services/student.service";
import {CourseService} from "../../services/course.service";
import {Enrollment} from "../../types/enrollment";
import {Course} from "../../types/course";
import {Student} from "../../types/student";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  enrollment: Enrollment;
  courses: Course[];
  students: Student[];

  constructor(
      private router: Router,
      private enrollmentService: EnrollmentService,
      private courseService: CourseService,
      private studentService: StudentService
  ) {
    this.enrollment = new Enrollment(0, new Course(0,'','',''), new Student(0,'','','','',''), false);
    this.courses = [];
    this.students = [];
  }

  ngOnInit(): void {
    this.loadCoursesAndStudents();
  }

  loadCoursesAndStudents(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  saveEnrollment(): void {
    this.enrollmentService.createEnrollment(this.enrollment).subscribe(
        () => this.router.navigate(['/enrollments']),
        error => console.error('Error creating enrollment', error)
    );
  }
}
