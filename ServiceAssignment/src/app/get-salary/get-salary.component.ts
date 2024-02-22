import { Component } from '@angular/core';
import { Salary } from './Salary';
import { GetDataService } from '../DataService/get-data.service';

@Component({
  selector: 'app-get-salary',
  templateUrl: './get-salary.component.html',
  styleUrls: ['./get-salary.component.css']
})
export class GetSalaryComponent {

  EmployeeSal : Salary[]

  constructor(private dataService : GetDataService)
  {
    this.EmployeeSal = this.dataService.getSalary();
  }

  

  

}
