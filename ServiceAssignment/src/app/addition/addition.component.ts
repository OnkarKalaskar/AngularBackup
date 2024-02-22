import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent  {

  num1 : number = 0;
  num2 : number = 0;
  sum;
 

  constructor(private operationService : OperationsService){

    this.sum = this.operationService.addition(this.num1,this.num2);
   }

  getSum()
  {
    this.sum = this.operationService.addition(this.num1,this.num2);
  }

  

  
}
