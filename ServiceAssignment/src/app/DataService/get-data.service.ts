import { Injectable } from '@angular/core';
import { AllEmployees } from '../EmployeeData';
import { EmployeeSalary } from '../get-salary/SalaryData';
import { BranchData } from '../branch/BranchData';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  getEmployees()
  {
    return AllEmployees;
  }

  getSalary()
  {
    return EmployeeSalary;
  }

  getBranch()
  {
    return BranchData; 
  }

  
  constructor() { }
}
