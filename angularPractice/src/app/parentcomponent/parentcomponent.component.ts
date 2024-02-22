import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent {

  categories : string[] = ["category1","category2", "category3"]

  choosenCategory : string = ""
  display : boolean = false
  
  callChildComponent(cat : string)
  {
    this.choosenCategory = cat;
    this.display = true;
  }
}
