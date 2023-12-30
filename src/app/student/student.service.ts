import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interface/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:3000/students';
  constructor(private _http: HttpClient) { }

  createStudent(student: any):Observable<any>{
    return this._http.post(this.baseUrl,student);
  }
  getStudentById(id: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/${id}`);
  }

  getStudentList(): Observable<Student[]> {
    return this._http.get<Student[]>(this.baseUrl);
  }

  updateStudent(id: number, value: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<Object> {
    return this._http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
