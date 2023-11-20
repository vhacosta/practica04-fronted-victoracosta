import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../types/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit{
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }
  deleteCourse(courseId: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
      this.courseService.deleteCourse(courseId).subscribe(
        () => this.getCourses(),
        error => {
          console.error('Error deleting course', error);
        }
      );
    }
  }
}
