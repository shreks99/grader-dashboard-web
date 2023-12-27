import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';

import { NgModule } from '@angular/core';


const routes: Routes = [
    {path: '', redirectTo: 'students',pathMatch:'full'},
    { path: 'students', component: StudentListComponent },
    { path: 'create-student', component: StudentCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
