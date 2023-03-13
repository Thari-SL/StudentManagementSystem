import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Semester1Service} from "../../../../../services/semester1.service";
import SemesterDTO from "../../../../../dto/SemesterDTO";

@Component({
  selector: 'app-semester1',
  templateUrl: './semester1.component.html',
  styleUrls: ['./semester1.component.scss']
})
export class Semester1Component implements OnInit {

  Semester1Form=new FormGroup({
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


  constructor(private _semester1Service:Semester1Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester1Form.get('regNum')?.value,
      Boolean(this.Semester1Form.get('subject1')?.value),
      Boolean(this.Semester1Form.get('subject2')?.value),
      Boolean(this.Semester1Form.get('subject3')?.value),
      Boolean(this.Semester1Form.get('subject4')?.value),
      Boolean(this.Semester1Form.get('subject5')?.value),
      Boolean(this.Semester1Form.get('subject6')?.value),
      Boolean(this.Semester1Form.get('subject7')?.value),
      Boolean(this.Semester1Form.get('subject8')?.value),
      Boolean(this.Semester1Form.get('subject9')?.value),

    )

    this._semester1Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester1Form.reset();
    },error => {
      alert('NotUpdated.....');

      console.log(error)
    })
  }

}
