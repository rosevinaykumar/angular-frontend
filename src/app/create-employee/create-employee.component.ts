import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployees();
    },
    error=>console.log(error));
  }
  onSubmit() {
    console.log("on submit");
    this.saveEmployee();
  }

  goToEmployees(){
    this.route.navigate(['/employees']);
  }
}
