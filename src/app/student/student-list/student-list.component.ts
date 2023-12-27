import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../interface/student';
import { StudentService } from '../student.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  
}