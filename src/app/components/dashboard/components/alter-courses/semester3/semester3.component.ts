import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Semester2Service} from "../../../../../services/semester2.service";
import SemesterDTO from "../../../../../dto/SemesterDTO";
import {Semester3Service} from "../../../../../services/semester3.service";

@Component({
  selector: 'app-semester3',
  templateUrl: './semester3.component.html',
  styleUrls: ['./semester3.component.scss']
})
export class Semester3Component implements OnInit {

  Semester3Form=new FormGroup({
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


  constructor(private _semester3Service:Semester3Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester3Form.get('regNum')?.value,
      Boolean(this.Semester3Form.get('subject1')?.value),
      Boolean(this.Semester3Form.get('subject2')?.value),
      Boolean(this.Semester3Form.get('subject3')?.value),
      Boolean(this.Semester3Form.get('subject4')?.value),
      Boolean(this.Semester3Form.get('subject5')?.value),
      Boolean(this.Semester3Form.get('subject6')?.value),
      Boolean(this.Semester3Form.get('subject7')?.value),
      Boolean(this.Semester3Form.get('subject8')?.value),
      Boolean(this.Semester3Form.get('subject9')?.value),

    )

    this._semester3Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester3Form.reset();
    },error => {
      alert('NotUpdated.....');
      console.log(error)
    })
  }

}
