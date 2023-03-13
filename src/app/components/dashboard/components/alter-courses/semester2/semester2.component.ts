import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import SemesterDTO from "../../../../../dto/SemesterDTO";
import {Semester2Service} from "../../../../../services/semester2.service";

@Component({
  selector: 'app-semester2',
  templateUrl: './semester2.component.html',
  styleUrls: ['./semester2.component.scss']
})
export class Semester2Component implements OnInit {

  Semester2Form=new FormGroup({
      regNum:new FormControl(),
      subject1:new FormControl(),
      subject2:new FormControl(),
      subject3:new FormControl(),
      subject4:new FormControl(),
      subject5:new FormControl(),
      subject6:new FormControl(),
      subject7:new FormControl(),
      subject8:new FormControl(),
      subject9:new FormControl(),

    }

  );


  constructor(private _semester2Service:Semester2Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester2Form.get('regNum')?.value,
      Boolean(this.Semester2Form.get('subject1')?.value),
      Boolean(this.Semester2Form.get('subject2')?.value),
      Boolean(this.Semester2Form.get('subject3')?.value),
      Boolean(this.Semester2Form.get('subject4')?.value),
      Boolean(this.Semester2Form.get('subject5')?.value),
      Boolean(this.Semester2Form.get('subject6')?.value),
      Boolean(this.Semester2Form.get('subject7')?.value),
      Boolean(this.Semester2Form.get('subject8')?.value),
      Boolean(this.Semester2Form.get('subject9')?.value),

    )

    this._semester2Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester2Form.reset();
    },error => {
      alert('NotUpdated.....');
      console.log(error)
    })
  }

}
