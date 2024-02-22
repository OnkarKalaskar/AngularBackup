import { Component } from '@angular/core';
import { OperationsService } from '../operations.service';
@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {

  num1 : number = 0;
  num2 : number = 0;
  divide;
 

  constructor(private operationService : OperationsService){

    this.divide = this.operationService.division(this.num1,this.num2);
   }

  getDivision()
  {
    this.divide = this.operationService.division(this.num1,this.num2);
  }
}
