import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../../services/student.service";
import StudentDTO from "../../../../dto/StudentDTO";

@Component({
  selector: 'app-remove-the-student',
  templateUrl: './remove-the-student.component.html',
  styleUrls: ['./remove-the-student.component.scss']
})
export class RemoveTheStudentComponent implements OnInit {

  studentForm=new FormGroup({
    regNum: new FormControl('',[
      Validators.required,Validators.maxLength(20)
    ])

  })

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
  }

  uploadData() {
    //console.log(this.studentForm);
    console.log(this.studentForm.get('regNum')?.value!)

    this._studentService.deleteStudent(this.studentForm.get('regNum')?.value).subscribe(response => {
        alert('Deleted....');
        this.studentForm.reset();
      }, error => {
      alert('Try Again....');
      this.studentForm.reset();
        console.log(error)
      }
    )
  }

}
