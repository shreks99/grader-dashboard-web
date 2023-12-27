import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/students';
  constructor(private http: HttpClient) { }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl,student);
  }
  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  updateStudent(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
