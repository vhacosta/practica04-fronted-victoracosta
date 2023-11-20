import {Component} from '@angular/core';
import {Enrollment} from "../../types/enrollment";
import {Course} from "../../types/course";
import {Student} from "../../types/student";
import {EnrollmentService} from "../../services/enrollment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  enrollmentId: number;
  enrollment: Enrollment;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private enrollmentService: EnrollmentService
  ) {
    // @ts-ignore
    this.enrollmentId = +this.route.snapshot.paramMap.get('id');
    this.enrollment = new Enrollment(0, new Course(0,'','',''), new Student(0,'','','','',''), false);
    this.cardNumber = '';
    this.cardExpiry = '';
    this.cardCvc = '';
  }

  ngOnInit(): void {
    this.loadEnrollmentDetails();
  }

  loadEnrollmentDetails(): void {
    this.enrollmentService.getEnrollmentById(this.enrollmentId).subscribe(
        enrollment => {
          if (enrollment) {
            this.enrollment = enrollment;
          } else {
            console.error('Enrollment not found');
          }
        },
        error => {
          console.error('Error loading enrollment details', error);
        }
    );
  }

  payEnrollment(): void {
    this.enrollment.pay = true;

    this.enrollmentService.updateEnrollment(this.enrollment).subscribe(
        () =>
          this.router.navigate(['/enrollments']),
        error => console.error('Error updating enrollment', error)
    );
  }
}
