import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName : "Sunny",
        lastName : "Duke",
        email: "duke@come"
      },
      {
        id: 2,
        firstName : "Rose",
        lastName : "Vinay",
        email: "duke@come"
      }
    ]
  }

}
