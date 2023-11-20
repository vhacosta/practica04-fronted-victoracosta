import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration/registration.component';
import {PaymentsComponent} from './payments/payments.component';
import { EnrollmentComponent } from './enrollment.component';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RegistrationComponent,
    PaymentsComponent,
    EnrollmentComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
  ]
})
export class EnrollmentModule {
}
