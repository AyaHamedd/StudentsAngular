import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DeleteStudentComponent } from "./components/delete-student/delete-student.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { StudentCardComponent } from "./components/student-card/student-card.component";
import { StudentDetailsComponent } from "./components/student-details/student-details.component";
import { StudentEditComponent } from "./components/student-edit/student-edit.component";
import { StudentRegisterComponent } from "./components/student-register/student-register.component";
import { StudentsComponent } from "./components/students/students.component";
import { StudentsService } from "./services/students.service";


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    NotFoundComponent,
    StudentCardComponent,
    StudentRegisterComponent,
    DeleteStudentComponent,
    StudentEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
