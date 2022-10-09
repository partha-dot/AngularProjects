import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
 
  showFiller = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }
  loggedin(){
    return localStorage.getItem('token');
    }
    onLogout(){
     localStorage.removeItem('token')
      this.router.navigate(['Login']);
    }
  


}
