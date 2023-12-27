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
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent {
  studentForm: FormGroup;
  branch: string[] = ['Computer Science', 'Computer Engineering'];

  constructor(private _fb:FormBuilder) {
    this.studentForm = this._fb.group({
      studentID: '',
      netID: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      branch: '',
    })
  }

  onFormSubmit() {
    if(this.studentForm.valid) {
      console.log(this.studentForm.value);
      
    }
  }
}
