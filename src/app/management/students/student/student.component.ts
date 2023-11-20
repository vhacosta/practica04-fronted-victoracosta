import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentId!: number;
  isUpdate!: boolean;
  student: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = +params['id'];
      this.isUpdate = !isNaN(this.studentId);

      if (this.isUpdate) {
        this.loadStudent();
      }
    });
  }

  loadStudent(): void {
    this.studentService.getStudentById(this.studentId).subscribe(
      student => (this.student = student),
      error => {
        console.error('Error loading student', error);
      }
    );
  }

  saveStudent(): void {
    if (this.isUpdate) {
      this.updateStudent();
    } else {
      this.createStudent();
    }
  }

  createStudent(): void {
    this.studentService.createStudent(this.student).subscribe(
      () => this.router.navigate(['/students']),
      error => {
        console.error('Error creating student', error);
      }
    );
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student).subscribe(
      () => this.router.navigate(['/students']),
      error => {
        console.error('Error updating student', error);
      }
    );
  }
}
