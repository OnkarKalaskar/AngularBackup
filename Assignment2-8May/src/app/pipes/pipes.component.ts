import { Component, Pipe, PipeTransform } from '@angular/core';
import { product } from '../template-form/product';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  currentDate = Date.now();
  milisecDateFormat = 534646546563435;
  getYear = 'Tue Dec 12 2018 11:20:18 GMT+0530';
  getTime = 'Wed Jan 20 2019 12:20:18 GMT+0530';

  //decimal pipe
  num1 : number = 4545;

  //currency pipe
  amount : number = 12323;


  //percent pipe
  newNumber : number = 1.456;

  //uppercase lowercase
  word1 : string = "onkar"
  word2 : string = "kal"

  //model object
  model = new product(2,"pen",5,"pune");
}
