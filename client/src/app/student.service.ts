import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  selectedStudent!: Student;
  students!: Student[];
  readonly baseUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Student[]>(this.baseUrl);
  }

  delete(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
