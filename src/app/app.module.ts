import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentService } from './student/student.service';
// ... other imports

@NgModule({
  declarations: [
    AppComponent,
    // ... any other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ... any other modules
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
