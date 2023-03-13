import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../../services/student.service";

@Component({
  selector: 'app-alter-courses',
  templateUrl: './alter-courses.component.html',
  styleUrls: ['./alter-courses.component.scss']
})
export class AlterCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  dataSet:any;



}
