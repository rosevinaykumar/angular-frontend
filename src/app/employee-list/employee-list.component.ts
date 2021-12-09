import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeService: EmployeeService,
    private route: Router) { }

  ngOnInit(): void {
    /*this.employees = [
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
    ]*/
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees = data;
      console.log(this.employees);
    });
   
  }

  updateEmployee(id:number) {
    console.log(id);
    this.route.navigate(['update-employee', id]);
  }

  deleteEmployee(id:number) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }
  viewEmployeeDetails(id:number) {
    this.route.navigate(['/employee-detail', id]);
  }


}
