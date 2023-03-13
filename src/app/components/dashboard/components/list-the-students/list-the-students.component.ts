import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../../services/student.service";

@Component({
  selector: 'app-list-the-students',
  templateUrl: './list-the-students.component.html',
  styleUrls: ['./list-the-students.component.scss']
})
export class ListTheStudentsComponent implements OnInit {


  students:any[]=[];

  constructor(private _service:StudentService) { }

  ngOnInit(): void {

    this._service.getAllStudent().subscribe(response=>{
      this.students=response.data;
    },error =>{
        console.log(error)
      }

      )
  }

}
