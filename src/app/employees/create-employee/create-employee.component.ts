import { Component, OnInit } from '@angular/core';

import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  varEmployeeDetails: any;

  constructor(
    private _employeeService : EmployeeService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {

    this.varEmployeeDetails = new Employee;

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.varEmployeeDetails.Id = id;

      this.GetEmployee();
    })

  }

  onSubmit()
  {
    if(this.varEmployeeDetails.Id == null)
    {
      this.varEmployeeDetails.IsActive = true;
      this._employeeService.SaveEmployeeData(this.varEmployeeDetails)
      .subscribe(data => {
          if(data){
            this.clearForm();
            alert(data);
          }
      });
    }
    else
    {
      this.varEmployeeDetails.IsActive = true;
      this._employeeService.UpdateEmployeeData(this.varEmployeeDetails)
      .subscribe(data => {
          if(data){
            this.clearForm();
            alert(data);
          }
      });
    }
  }

  GetEmployee()
  {
    this._employeeService.GetEmployee(this.varEmployeeDetails.Id)
    .subscribe(data => {
      this.varEmployeeDetails = data;
    });

  }

  clearForm()
  {
    this.varEmployeeDetails.Name = "";
    this.varEmployeeDetails.Salary = "";
    this.varEmployeeDetails.Age = "";
  }
}
