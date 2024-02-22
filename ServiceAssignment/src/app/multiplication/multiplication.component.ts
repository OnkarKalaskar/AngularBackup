import { Component } from '@angular/core';
import { OperationsService } from '../operations.service';
@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {

  num1 : number = 0;
  num2 : number = 0;
  multi;
 

  constructor(private operationService : OperationsService){

    this.multi = this.operationService.multiplication(this.num1,this.num2);
   }

  getMulti()
  {
    this.multi = this.operationService.multiplication(this.num1,this.num2);
  }
}
