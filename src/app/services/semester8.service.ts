import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import SemesterDTO from "../dto/SemesterDTO";


@Injectable({
  providedIn: 'root'
})
export class Semester8Service {

  constructor(private http:HttpClient) { }


  public saveSemester(dto: SemesterDTO):Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/semester8Route/alterSemester',{
      regNum:dto.regNum,
      subject1:dto.subject1,
      subject2:dto.subject2,
      subject3:dto.subject3,
      subject4:dto.subject4,
      subject5:dto.subject5,
      subject6:dto.subject6,
      subject7:dto.subject7,
      subject8:dto.subject8,
      subject9:dto.subject9,
    })
  }





}
