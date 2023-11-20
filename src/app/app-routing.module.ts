import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from "./management/courses/courses.component";
import {StudentsComponent} from "./management/students/students.component";
import {RegistrationComponent} from "./enrollment/registration/registration.component";
import {PaymentsComponent} from "./enrollment/payments/payments.component";
import {CourseComponent} from "./management/courses/course/course.component";
import {StudentComponent} from "./management/students/student/student.component";
import {EnrollmentComponent} from "./enrollment/enrollment.component";

const routes: Routes = [
  {path: '', component: EnrollmentComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'enrollments', component: EnrollmentComponent},
  {path: 'payments', component: PaymentsComponent},
  { path: 'courses/create', component: CourseComponent },
  { path: 'courses/edit/:id', component: CourseComponent },
  { path: 'students/create', component: StudentComponent },
  { path: 'students/edit/:id', component: StudentComponent },
  { path: 'enrollments/create', component: RegistrationComponent },
  { path: 'enrollments/payment/:id', component: PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
