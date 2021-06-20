import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employeeList: any;

  constructor(
    private _employeeService : EmployeeService
  ) { }

  ngOnInit() {
    this.LoadEmployeeLits();
  }

  LoadEmployeeLits()
  {
    this._employeeService.LoadEmployeeLits()
    .subscribe(data =>
      {
        this.employeeList = data;
      });
  }

  DeleteEmployee(Id)
  {
    if(confirm('Are you sure to delete this record?')){
      this._employeeService.DeleteEmployee(Id)
      .subscribe(data => {
        if(data){
          alert(data);
          this.LoadEmployeeLits();
        }
      });
    }
  }
}
