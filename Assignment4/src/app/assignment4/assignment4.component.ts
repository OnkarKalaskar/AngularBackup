import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component {

  models = [
    new Employee(1,"onkar","kalaskar",23,"sangamner",1400),
    new Employee(1,"aniket","madwe",24,"nagpur",1500),
    new Employee(1,"aayush","singh",23,"pune",1600),
    new Employee(1,"aniruddha","paul",23,"mumbai",1700)
  ];
  
}
