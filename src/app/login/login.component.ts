import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom!:FormGroup;
  durationInSeconds = 3;
  constructor(private fromBilder:FormBuilder, private http:HttpClient, private router:Router,private _snackBar: MatSnackBar, private _message:ApiService) { }
 
  ngOnInit(): void {
    this.loginFrom=this.fromBilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/register/")
    .subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.email === this.loginFrom.value.email && a.password === this.loginFrom.value.password
    })
    if(user){
      localStorage.setItem('token', user.email);
      this._message.LoginSuccess();
      // alert("Login Successfully");
      this.router.navigate(['Dashbord']);
    }
    else{
      this._message.LoginFail();
      this.loginFrom.reset();
    }
    },
    err=>{
      alert("Server side error")
    })
  }
}
@Component({
  selector: 'LoginFail',
  template: `<h3 class="example">Login Failed! Enter Correct Information</h3>  `,
  styles: [
    `
    .example {
      color: rgb(252, 114, 114);
    }
  `,
  ],
})
export class LoginFail {}
//login success message
@Component({
  selector: 'LoginSuccess',
  template: `<h3 class="example">Login SuccessFully</h3>  `,
  styles: [
    ` .example {
      color:lightgreen;
    }
  `,
  ],
})
export class LoginSuccess {}
