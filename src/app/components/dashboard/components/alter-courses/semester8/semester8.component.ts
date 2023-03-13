import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Semester4Service} from "../../../../../services/semester4.service";
import SemesterDTO from "../../../../../dto/SemesterDTO";
import {Semester8Service} from "../../../../../services/semester8.service";

@Component({
  selector: 'app-semester8',
  templateUrl: './semester8.component.html',
  styleUrls: ['./semester8.component.scss']
})
export class Semester8Component implements OnInit {

  Semester8Form=new FormGroup({
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


  constructor(private _semester8Service:Semester8Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester8Form.get('regNum')?.value,
      Boolean(this.Semester8Form.get('subject1')?.value),
      Boolean(this.Semester8Form.get('subject2')?.value),
      Boolean(this.Semester8Form.get('subject3')?.value),
      Boolean(this.Semester8Form.get('subject4')?.value),
      Boolean(this.Semester8Form.get('subject5')?.value),
      Boolean(this.Semester8Form.get('subject6')?.value),
      Boolean(this.Semester8Form.get('subject7')?.value),
      Boolean(this.Semester8Form.get('subject8')?.value),
      Boolean(this.Semester8Form.get('subject9')?.value),

    )

    this._semester8Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester8Form.reset();
    },error => {
      alert('NotUpdated.....');
      console.log(error)
    })
  }

}
