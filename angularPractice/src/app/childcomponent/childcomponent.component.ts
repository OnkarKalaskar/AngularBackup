import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  

  @Input() taskCategory : string = ""

  subcategories : string[] = []

  choosenSubcategory  : string = ""
  display : boolean = false

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    
    if(this.taskCategory == "category1")
    {
      this.subcategories.push("subcategory1","subcategory2")
    }
    else if(this.taskCategory == "category2")
    {
      this.subcategories.push("subcategory3","subcategory4")
    }
  }

  currentSubcategory(subcat : string)
  {
    this.choosenSubcategory = subcat;
    console.log(this.choosenSubcategory);
    this.display = true;
  }
}
