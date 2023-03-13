import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../../services/student.service";
import StudentDTO from "../../../../dto/StudentDTO";


@Component({
  selector: 'app-add-the-students',
  templateUrl: './add-the-students.component.html',
  styleUrls: ['./add-the-students.component.scss']
})
export class AddTheStudentsComponent implements OnInit {

  studentForm=new FormGroup({
    regNum: new FormControl('',[
      Validators.required,Validators.minLength(13),Validators.maxLength(20)
    ]),
    fName: new FormControl(),
    lName: new FormControl(),
    address: new FormControl('',[
      Validators.required,Validators.minLength(3),Validators.maxLength(250)
    ]),
    birthdate: new FormControl(),
    idNum: new FormControl('',[
      Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
    degree: new FormControl(),

  })

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
  }

  uploadData() {
    //console.log(this.studentForm);

    const dto = new StudentDTO(
      this.studentForm.get('regNum')?.value!,
      this.studentForm.get('fName')?.value!,
      this.studentForm.get('lName')?.value!,
      this.studentForm.get('address')?.value!,
      this.studentForm.get('birthdate')?.value!,   //-------have to convert to Date
      this.studentForm.get('idNum')?.value!,
      this.studentForm.get('degree')?.value!
    )
    console.log(dto)
    this._studentService.saveStudent(dto).subscribe(response => {
        alert('Saved...');
        this.studentForm.reset();

      }, error => {
      alert('Try Again...');
        console.log(error)
      }
    )
  }



}
