import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';//importer le service

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

//_employeeService est une variable locale qui nous donne une instance de EmployeService
  constructor(private _employeeService: EmployeeService){}


  ngOnInit() {
    //alors ici getEmployees retourne un observable et on doit subscribe a cet observable
  this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);

  }



}