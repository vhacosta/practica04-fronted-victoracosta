import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(
      students => this.students = students,
      error => {
        console.error('Error loading students', error);
      }
    );
  }
  deleteStudent(studentId: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este alumno?')) {
      this.studentService.deleteStudent(studentId).subscribe(
        () => this.getStudents(),
        error => {
          console.error('Error deleting course', error);
        }
      );
    }
  }
}
