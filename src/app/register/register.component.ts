import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerFrom!:FormGroup;
  constructor(private fromBilder:FormBuilder, private http:HttpClient, private router:Router, private _message:ApiService) { }

  ngOnInit(): void {
    this.registerFrom=this.fromBilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      mobile:['', Validators.required],
      password:['', Validators.required]
    })
  }
  userReg(){
    this.http.post<any>("http://localhost:3000/register/",this.registerFrom.value)
    .subscribe(res=>{
      this._message.RegSuccess();
      this.registerFrom.reset();
      this.router.navigate(['Login'])
    },
    err=>{
      this._message.RegFailed();
      this.router.navigate(['Register'])
    })
  }

}
