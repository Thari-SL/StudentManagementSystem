import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Semester4Service} from "../../../../../services/semester4.service";
import SemesterDTO from "../../../../../dto/SemesterDTO";
import {Semester5Service} from "../../../../../services/semester5.service";

@Component({
  selector: 'app-semester5',
  templateUrl: './semester5.component.html',
  styleUrls: ['./semester5.component.scss']
})
export class Semester5Component implements OnInit {

  Semester5Form=new FormGroup({
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


  constructor(private _semester5Service:Semester5Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester5Form.get('regNum')?.value,
      Boolean(this.Semester5Form.get('subject1')?.value),
      Boolean(this.Semester5Form.get('subject2')?.value),
      Boolean(this.Semester5Form.get('subject3')?.value),
      Boolean(this.Semester5Form.get('subject4')?.value),
      Boolean(this.Semester5Form.get('subject5')?.value),
      Boolean(this.Semester5Form.get('subject6')?.value),
      Boolean(this.Semester5Form.get('subject7')?.value),
      Boolean(this.Semester5Form.get('subject8')?.value),
      Boolean(this.Semester5Form.get('subject9')?.value),

    )

    this._semester5Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester5Form.reset();
    },error => {
      alert('NotUpdated.....');
      console.log(error)
    })
  }

}
