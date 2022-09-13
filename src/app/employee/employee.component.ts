import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { ApiService } from '../services/api.service';
import { MatSort } from '@angular/material/sort';
import { auto } from '@popperjs/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']

})


export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['firstName','lastName','jobTitleName','phoneNumber','email', 'salary','action'];
  dataSource !: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator:any= MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private dialog: MatDialog, private api:ApiService) {}
  openDialog(){
    this.dialog.open(AddEmployeeComponent,{
      width:'35%'}).afterClosed().subscribe(val=>{
        if(val==='save'){
          this.getAllEmployee();
        }
      });
  }
  getAllEmployee(){
    this.api.getEmployee()
    .subscribe({next:(res)=>
      {this.dataSource= new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;},
      error:()=>{
        alert("Error with getting Employee")
      }
    
    })
    }
    editEmployee(row:any){
      this.dialog.open(AddEmployeeComponent,{
        width:'30%',
        data:row
      }).afterClosed().subscribe(val=>{
        if(val==='update'){
          this.getAllEmployee();
        }
      })
    }
    deleteEmployee(id:number){
      this.api.delEmployee(id)
      .subscribe({next:(res)=>{
        this.api.EmpDelete();
        this.getAllEmployee();
      },
        
        error:()=>{
          alert("Error with deleting Employee")
        }
      
      })
    }
  
  ngOnInit(): void {
    this.getAllEmployee();
 
}
}
