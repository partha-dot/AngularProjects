import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormsModule } from '@angular/forms';

import {CdkTableModule} from '@angular/cdk/table'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './topnav/topnav.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule,  } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    MyContainerComponent,
    TopnavComponent,
    RegisterComponent,
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    MatTreeModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    CdkTableModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule,
    MatRadioModule,
    MatDatepickerModule, 
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule

    ,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


