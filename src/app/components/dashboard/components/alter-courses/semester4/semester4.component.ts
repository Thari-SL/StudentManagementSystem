import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Semester3Service} from "../../../../../services/semester3.service";
import SemesterDTO from "../../../../../dto/SemesterDTO";
import {Semester4Service} from "../../../../../services/semester4.service";

@Component({
  selector: 'app-semester4',
  templateUrl: './semester4.component.html',
  styleUrls: ['./semester4.component.scss']
})
export class Semester4Component implements OnInit {

  Semester4Form=new FormGroup({
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


  constructor(private _semester4Service:Semester4Service) { }

  ngOnInit(): void {
  }


  uploadData(){
    const dto=new SemesterDTO(
      this.Semester4Form.get('regNum')?.value,
      Boolean(this.Semester4Form.get('subject1')?.value),
      Boolean(this.Semester4Form.get('subject2')?.value),
      Boolean(this.Semester4Form.get('subject3')?.value),
      Boolean(this.Semester4Form.get('subject4')?.value),
      Boolean(this.Semester4Form.get('subject5')?.value),
      Boolean(this.Semester4Form.get('subject6')?.value),
      Boolean(this.Semester4Form.get('subject7')?.value),
      Boolean(this.Semester4Form.get('subject8')?.value),
      Boolean(this.Semester4Form.get('subject9')?.value),

    )

    this._semester4Service.saveSemester(dto).subscribe(response=>{
      alert('Updated.....');
      this.Semester4Form.reset();
    },error => {
      alert('NotUpdated.....');
      console.log(error)
    })
  }

}
