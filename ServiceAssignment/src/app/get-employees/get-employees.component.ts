import { Component, OnInit} from '@angular/core';
import { Employee } from '../Employee';
import { AllEmployees } from '../EmployeeData';
import { GetDataService } from '../DataService/get-data.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css']
})
export class GetEmployeesComponent implements OnInit {

  Employees : Employee[]=[];

  constructor(private dataService : GetDataService)
  {
  }

  getEmployees()
  {
    this.Employees = this.dataService.getEmployees();
  }

  ngOnInit() {
      this.getEmployees();
  }
}
