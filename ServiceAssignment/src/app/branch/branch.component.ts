import { Component } from '@angular/core';
import { GetDataService } from '../DataService/get-data.service'; 
import { Branch } from './Branch';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {

  Branches : Branch[] = []

  constructor(private dataService : GetDataService)
  {
    this.Branches = dataService.getBranch();
  }
}
