import { Component } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {

  num1 : number = 0;
  num2 : number = 0;
  substract;
 

  constructor(private operationService : OperationsService){

    this.substract = this.operationService.substraction(this.num1,this.num2);
   }

   getSubstraction()
  {
    this.substract = this.operationService.substraction(this.num1,this.num2);
  }
}
