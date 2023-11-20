import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CourseService} from "../../../services/course.service";
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  courseId!: number;
  isUpdate!: boolean;
  course: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
      this.isUpdate = !isNaN(this.courseId);

      if (this.isUpdate) {
        this.loadCourse();
      }
    });
  }

  loadCourse(): void {
    this.courseService.getCourseById(this.courseId).subscribe(
      course => (this.course = course),
      error => {
        console.error('Error loading course', error);
      }
    );
  }

  saveCourse(): void {
    if (this.isUpdate) {
      this.updateCourse();
    } else {
      this.createCourse();
    }
  }

  createCourse(): void {
    this.courseService.createCourse(this.course).subscribe(
      () => this.router.navigate(['/courses']),
      error => {
        console.error('Error creating course', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  updateCourse(): void {
    this.courseService.updateCourse(this.course).subscribe(
      () => this.router.navigate(['/courses']),
      error => {
        console.error('Error updating course', error);
        // Maneja el error según tus necesidades
      }
    );
  }
}
