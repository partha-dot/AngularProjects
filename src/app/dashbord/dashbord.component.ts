import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
   
  }
  


}
