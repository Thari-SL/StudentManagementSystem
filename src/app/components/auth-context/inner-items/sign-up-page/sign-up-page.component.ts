import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../../services/users.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {


  signupForm=new FormGroup({
    name:new FormControl('',Validators.required),
    contact:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  constructor(private _service:UsersService) { }

  ngOnInit(): void {
  }

  signUp(){
    this._service.signUp(
      this.signupForm.get('name')?.value,
      this.signupForm.get('contact')?.value,
      this.signupForm.get('email')?.value,
      this.signupForm.get('password')?.value,
    ).subscribe(response=>{
      alert('Successfully Sign Up......')
        console.log(response)
    },error => {
        console.log(error)
      }
      )


  }



}
