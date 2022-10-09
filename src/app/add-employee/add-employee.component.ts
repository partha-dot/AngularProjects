import { Component, Inject, OnInit ,OnChanges} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InjectFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent implements OnInit {
  
  jobTitle: any;
  employeeform!:FormGroup;
  ActionBtn:string="Save"
  constructor(private frombilder:FormBuilder,
     private api:ApiService, 
     @Inject(MAT_DIALOG_DATA) public editdata:any,
     private dialogref:MatDialogRef<AddEmployeeComponent> ) { }

     addEmployee(){
    if(!this.editdata){
      if(this.employeeform.valid){
        this.api.postEmployee(this.employeeform.value).subscribe({
          next:(res)=>{
            this.api.EmpCreateSuccess();
            this.employeeform.reset();
             this.dialogref.close('save');
          },
            
          error:()=>{
            alert("Error with adding Employee")
          }})
      }
    }
    else{this.updateEmp()}
  }
  updateEmp(){
    this.api.putEmployee(this.employeeform.value, this.editdata.id).subscribe({
      next:(res)=>{
        this.api.EmpUpdateSuccess();
        this.employeeform.reset();
         this.dialogref.close('update');
         
      },
        
      error:()=>{
        alert("Error while updating Employee")
      }})
  }
  
  ngOnInit(): void {
    this.employeeform=this.frombilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      jobTitleName:['', Validators.required],
      email:['', Validators.required],
      // gender:['', Validators.required],
      phoneNumber:['', Validators.required],
      salary:['', Validators.required],
    })
    if(this.editdata){
      this.ActionBtn="Update";
      this.employeeform.controls['firstName'].setValue(this.editdata.firstName);
      this.employeeform.controls['lastName'].setValue(this.editdata.lastName);
      this.employeeform.controls['jobTitleName'].setValue(this.editdata.jobTitleName);
      this.employeeform.controls['email'].setValue(this.editdata.email);
      // this.employeeform.controls['gender'].setValue(this.editdata.gender);
      this.employeeform.controls['phoneNumber'].setValue(this.editdata.phoneNumber);
      this.employeeform.controls['salary'].setValue(this.editdata.salary);
    }
  
  }

}
