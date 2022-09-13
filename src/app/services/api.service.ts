import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Component} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  durationInSeconds = 5;
  constructor(private http:HttpClient , private _snackBar: MatSnackBar) { }
  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/addemployee/",data);
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/addemployee/");
  }
  putEmployee(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/addemployee/"+id,data);

  }
  delEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/addemployee/"+id);

  }

//mesagess-------------------------------------------------------------
 

EmpCreateSuccess() {
  this._snackBar.openFromComponent(EmpCreateSuccess, {
    duration: this.durationInSeconds * 1000,
  });
}
EmpUpdateSuccess() {
  this._snackBar.openFromComponent(EmpUpdateSuccess, {
    duration: this.durationInSeconds * 1000,
  });
}
EmpDelete() {
  this._snackBar.openFromComponent(EmpDelete, {
    duration: this.durationInSeconds * 1000,
  });
}

RegSuccess() {
    this._snackBar.openFromComponent(RegSuccess, {
      duration: this.durationInSeconds * 1000,
    });
  }
  RegFailed() {
    this._snackBar.openFromComponent(RegFailed, {
      duration: this.durationInSeconds * 1000,
    });
  }
  LoginSuccess() {
    this._snackBar.openFromComponent(LoginSuccess, {
      duration: this.durationInSeconds * 1000,
    });
  }
  LoginFail() {
    this._snackBar.openFromComponent(LoginFail, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
//login Failed message
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
//Registration Success
@Component({
  selector: 'RegSuccess',
  template: `<h3 class="example">User Creation done SuccessFully</h3>  `,
  styles: [
    ` .example {
      color:lightgreen;
    }
  `,
  ],
})
export class RegSuccess {}
@Component({
  selector: 'RegFailed',
  template: `<h3 class="example">Failed while register user</h3>  `,
  styles: [
    ` .example {
      color:rgb(252, 114, 114);
    }
  `,
  ],
})
export class RegFailed {}



//login success message
@Component({
  selector: 'EmpCreateSuccess',
  template: `<h3 class="example">Employee Created SuccessFully</h3>  `,
  styles: [
    ` .example {
      color:lightgreen;
    }
  `,
  ],
})
export class EmpCreateSuccess {}
//Registration Success
@Component({
  selector: 'EmpUpdateSuccess',
  template: `<h3 class="example">Employee Updated SuccessFully</h3>  `,
  styles: [
    ` .example {
      color:yellow;
    }
  `,
  ],
})
export class EmpUpdateSuccess {}
@Component({
  selector: 'EmpDelete',
  template: `<h3 class="example">Employee Record Delete Successfully</h3>  `,
  styles: [
    ` .example {
      color:rgb(252, 114, 114);
    }
  `,
  ],
})
export class EmpDelete {}
//mesagess-------------------------------------------------------------