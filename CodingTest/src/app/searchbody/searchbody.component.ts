import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbody',
  templateUrl: './searchbody.component.html',
  styleUrls: ['./searchbody.component.css']
})
export class SearchbodyComponent {

  searchKey : string = '';
  searchKey1 : string = '';
  searchKey2 : string = '';
  constructor(private router : Router, private route : ActivatedRoute){}

  getSearchResultById()
  {
      this.router.navigate(["searchPage/"+1+"/"+this.searchKey]);
  }

  generalSearch()
  {
    this.router.navigate(["searchPage/"+2+"/"+this.searchKey1]);

  }

  getSearchResultByAge()
  {
    this.router.navigate(["searchPage/"+3+"/"+this.searchKey2]);
  }
}
