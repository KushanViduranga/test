import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly URL = "http://192.168.8.133/API/CustomerPortal/api/";
  //readonly URL = "http://localhost:5600/api/";

  constructor(
    private http: HttpClient
  ) { }

  SaveEmployeeData(varEmployeeDetails)
  {
    return this.http.post(this.URL + 'Customer', varEmployeeDetails);
  }

  UpdateEmployeeData(varEmployeeDetails)
  {
    return this.http.put(this.URL + 'Customer?id=' + varEmployeeDetails.Id, varEmployeeDetails);
  }

  LoadEmployeeLits()
  {
    return this.http.get(this.URL + 'Customer');
  }

  GetEmployee(Id)
  {
    return this.http.get(this.URL + 'Customer?id=' + Id);
  }

  DeleteEmployee(Id)
  {
    return this.http.delete(this.URL + 'Customer?id=' + Id);
  }

}
