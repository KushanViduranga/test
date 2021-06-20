import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeComponent } from '../app/employees/create-employee/create-employee.component';
import { EmployeeListComponent } from '../app/employees/employee-list/employee-list.component';
//import { NotFoundComponent } from '@angular/not';


const routes: Routes = [  
  { path: '', component: EmployeeListComponent },
  { path: 'newEmployee', component: CreateEmployeeComponent },
  { path: 'loadEmployee/:id', component: CreateEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
