import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Student } from "../models/student";

//The @Injectable() decorator specifies that Angular can use this class in the DI system.
// The metadata, providedIn: 'root', means that this service is visible throughout the
// application.

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  readonly baseURL: string = "https://immense-taiga-73032.herokuapp.com/students";
  constructor(private myclient: HttpClient) {}

  isUpdated: boolean = false;

  // Be default get observes the body, change its property to observe the response
  getStudents() {
    let response = this.myclient.get(this.baseURL, { observe: "response" });
    return response;
  }

  getStudentById(id: string) {
    return this.myclient.get(`${this.baseURL}/${id}`);
  }

  addStudent(student: Student) {
    let response = this.myclient.post(this.baseURL, student);
    return response;
  }

  deleteStudent(id: string) {
    return this.myclient.delete(`${this.baseURL}/${id}`);
  }

  editStudent(student: Student) {
    let response = this.myclient.patch(`${this.baseURL}/${student.id}`, student);
    return response;
  }
}
