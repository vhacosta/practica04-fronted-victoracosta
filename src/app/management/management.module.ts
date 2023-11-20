import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentsComponent} from './students/students.component';
import {CoursesComponent} from './courses/courses.component';
import { StudentComponent } from './students/student/student.component';
import { CourseComponent } from './courses/course/course.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StudentsComponent,
    CoursesComponent,
    StudentComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
  ]
})
export class ManagementModule {
}
