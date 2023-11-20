import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Course} from "../types/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Mathematics', code: 'MATH101', description: 'Introduction to Mathematics' },
    { id: 2, name: 'Computer Science', code: 'CS101', description: 'Introduction to Computer Science' },
    { id: 3, name: 'English Literature', code: 'ENG201', description: 'Survey of English Literature' },
    { id: 4, name: 'History', code: 'HIST101', description: 'World History: Ancient Civilizations' },
    { id: 5, name: 'Chemistry', code: 'CHEM201', description: 'Basic Principles of Chemistry' },
    { id: 6, name: 'Physics', code: 'PHYS101', description: 'Fundamentals of Physics' },
    { id: 7, name: 'Biology', code: 'BIO101', description: 'Introduction to Biology' },
    { id: 8, name: 'Economics', code: 'ECON201', description: 'Principles of Microeconomics' },
    { id: 9, name: 'Psychology', code: 'PSYCH101', description: 'Introduction to Psychology' },
    { id: 10, name: 'Sociology', code: 'SOC101', description: 'Introduction to Sociology' },
    { id: 11, name: 'Philosophy', code: 'PHIL201', description: 'Introduction to Philosophy' },
    { id: 12, name: 'Political Science', code: 'POLSCI101', description: 'Introduction to Political Science' },
    { id: 13, name: 'Art History', code: 'ARTHIST101', description: 'Survey of Art History' },
    { id: 14, name: 'Geography', code: 'GEOG101', description: 'Physical Geography' },
    { id: 15, name: 'Spanish', code: 'SPAN101', description: 'Beginner Spanish' },
    { id: 16, name: 'French', code: 'FRENCH101', description: 'Beginner French' },
    { id: 17, name: 'German', code: 'GERMAN101', description: 'Beginner German' },
    { id: 18, name: 'Chinese', code: 'CHINESE101', description: 'Beginner Chinese' },
    { id: 19, name: 'Japanese', code: 'JAPANESE101', description: 'Beginner Japanese' },
    { id: 20, name: 'Physical Education', code: 'PED101', description: 'Introduction to Physical Education' }
  ];

  constructor() {}

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(id: number) {
    const course = this.courses.find(c => c.id === id);
    return of(course);
  }

  createCourse(course: Course): Observable<Course> {
    course.id = this.generateId();
    this.courses.push(course);
    return of(course);
  }

  updateCourse(course: Course): Observable<Course> {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index !== -1) {
      this.courses[index] = course;
      return of(course);
    } else {
      throw new Error('Course not found');
    }
  }

  deleteCourse(id: number) {
    const index = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
      return of(null);
    } else {
      throw new Error('Course not found');
    }
  }

  private generateId(): number {
    const ids = this.courses.map(course => course.id);
    return Math.max(...ids) + 1;
  }
}
