import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Semester4Service} from "../../../../../services/semester4.service";
import SemesterDTO from "../../../../../dto/SemesterDTO";
import {Semester7Service} from "../../../../../services/semester7.service";

@Component({
  selector: 'app-semester7',
  templateUrl: './semester7.component.html',
  styleUrls: ['./semester7.component.scss']
})
export class Semester7Component implements OnInit {

  Semester7Form=new FormGroup({
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


  constructor(private _semester7Service:Semester7Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester7Form.get('regNum')?.value,
      Boolean(this.Semester7Form.get('subject1')?.value),
      Boolean(this.Semester7Form.get('subject2')?.value),
      Boolean(this.Semester7Form.get('subject3')?.value),
      Boolean(this.Semester7Form.get('subject4')?.value),
      Boolean(this.Semester7Form.get('subject5')?.value),
      Boolean(this.Semester7Form.get('subject6')?.value),
      Boolean(this.Semester7Form.get('subject7')?.value),
      Boolean(this.Semester7Form.get('subject8')?.value),
      Boolean(this.Semester7Form.get('subject9')?.value),

    )

    this._semester7Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester7Form.reset();
    },error => {
      alert('NotUpdated.....');
      console.log(error)
    })
  }

}
