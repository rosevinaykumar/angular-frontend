import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "localhost:4200/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployeeist() : Observable<Employee[]> {
    return  this.http.get<Employee[]>('($this.baseUrl)');
  }
}
