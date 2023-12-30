import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,

  ],
  providers: [],
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent {
  studentForm: FormGroup;
  branch: string[] = ['Computer Science', 'Computer Engineering','Others'];

  constructor(
    private _fb:FormBuilder,
    private _studentService: StudentService,
    private _dialogRef: DialogRef<StudentCreateComponent>
    ) {
    this.studentForm = this._fb.group({
      studentID: ['',[Validators.required]],
      netID: ['',[Validators.required]],
      fullName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      branch: ['',[Validators.required]],
    })
  }

  onFormSubmit() {
    if(this.studentForm.valid) {
      console.log(this.studentForm.value);
      this._studentService.createStudent(this.studentForm.value).subscribe({
        next: (val:any) => {
          alert('Employee Added Successfully');
          this._dialogRef.close();
        },
        error:(err:any) => {
          console.log(err);
          
        }
      })
      
    }
  }
}
