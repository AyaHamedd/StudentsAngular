import { Component, Input, OnInit } from "@angular/core";
import { Student } from "src/app/models/student";
import { StudentsService } from "src/app/services/students.service";

@Component({
  selector: "app-student-edit",
  templateUrl: "./student-edit.component.html",
  styles: [],
})
export class StudentEditComponent implements OnInit {
  constructor(private myService: StudentsService) {}
  subscriber: any;
  @Input("studentInfo") student: Student = {
    id: "",
    name: "",
    email: "",
  };
  ngOnInit(): void {}

  updateStudent(myForm: any) {
    this.subscriber = this.myService.editStudent(this.student).subscribe({
      next: () => {
        console.log("updates successfully");
        this.subscriber.unsubscribe();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
