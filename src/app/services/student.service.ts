import { Injectable } from '@angular/core';
import StudentDTO from "../dto/StudentDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


  public saveStudent(dto: StudentDTO): Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/studentRoute/saveStudent',{
      regNum:dto.regNum,
      fName:dto.fName,
      lName:dto.lName,
      address:dto.address,
      birthdate:dto.birthdate,
      idNum:dto.idNum,
      degree:dto.degree
    })
  }
  public deleteStudent(regNum: string): Observable<any>{
    return this.http.delete('http://localhost:3000/api/v1/studentRoute/deleteStudent',{
      headers:{regNum}
      }

    )
  }

  public getAllStudent(): Observable<any>{
    return this.http.get('http://localhost:3000/api/v1/studentRoute/getAllStudent')
  }





}
