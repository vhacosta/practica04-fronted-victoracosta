import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Grade} from "../types/grade";

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private grades: Grade[] = [];

  constructor() {}

  getGrades(): Observable<Grade[]> {
    return of(this.grades);
  }

  getGradeById(id: number) {
    const grade = this.grades.find(g => g.id === id);
    return of(grade);
  }

  createGrade(grade: Grade): Observable<Grade> {
    grade.id = this.generateId();
    this.grades.push(grade);
    return of(grade);
  }

  updateGrade(grade: Grade): Observable<Grade> {
    const index = this.grades.findIndex(g => g.id === grade.id);
    if (index !== -1) {
      this.grades[index] = grade;
      return of(grade);
    } else {
      throw new Error('Grade not found');
    }
  }

  deleteGrade(id: number){
    const index = this.grades.findIndex(grade => grade.id === id);
    if (index !== -1) {
      this.grades.splice(index, 1);
      return of(null);
    } else {
      throw new Error('Grade not found');
    }
  }

  private generateId(): number {
    const ids = this.grades.map(grade => grade.id);
    return Math.max(...ids) + 1;
  }
}
