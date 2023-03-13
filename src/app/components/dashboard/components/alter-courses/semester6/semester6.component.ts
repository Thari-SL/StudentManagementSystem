import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Semester4Service} from "../../../../../services/semester4.service";
import SemesterDTO from "../../../../../dto/SemesterDTO";
import {Semester6Service} from "../../../../../services/semester6.service";

@Component({
  selector: 'app-semester6',
  templateUrl: './semester6.component.html',
  styleUrls: ['./semester6.component.scss']
})
export class Semester6Component implements OnInit {

  Semester6Form=new FormGroup({
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


  constructor(private _semester6Service:Semester6Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester6Form.get('regNum')?.value,
      Boolean(this.Semester6Form.get('subject1')?.value),
      Boolean(this.Semester6Form.get('subject2')?.value),
      Boolean(this.Semester6Form.get('subject3')?.value),
      Boolean(this.Semester6Form.get('subject4')?.value),
      Boolean(this.Semester6Form.get('subject5')?.value),
      Boolean(this.Semester6Form.get('subject6')?.value),
      Boolean(this.Semester6Form.get('subject7')?.value),
      Boolean(this.Semester6Form.get('subject8')?.value),
      Boolean(this.Semester6Form.get('subject9')?.value),

    )

    this._semester6Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester6Form.reset();
    },error => {
      alert('NotUpdated.....');
      console.log(error)
    })
  }

}
