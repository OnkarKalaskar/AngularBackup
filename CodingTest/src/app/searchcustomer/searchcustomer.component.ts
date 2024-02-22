import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {

  searchData : string = '';
  id : number = 0;
  searchResult : Customer[] = []
  generalSearchResults : Customer[] = []

  display1 : boolean = false;
  display2 : boolean = false;

  constructor(private route : ActivatedRoute , private customerService : CustomerService) {}

  ngOnInit(): void {
    this.setSearchData();
    this.getSearchResult();
  }

  setSearchData()
  {
    this.route.params.subscribe((params : Params) =>{
      this.searchData = params['data'];
      this.id = params['id'];
      console.log(this.searchData);
    })
  } 

  getSearchResult()
  {
    if(this.id == 1)
    {
      this.customerService.getById(parseInt(this.searchData)).subscribe({
        next : (res : any) =>
        {
          let arr : Customer[] = [
            res
          ]
          this.searchResult = arr;
        }
      })
    }
    if(this.id == 2)
    {
      this.customerService.getGeneralSearch(this.searchData).subscribe({
        next : (res : any) =>{
          let arr : Customer[] = [
            res
          ]
          console.log(res);
          this.searchResult = res;
        }
      })
    }

    if(this.id == 3)
    {
      this.customerService.getByAgeSearch(parseInt(this.searchData)).subscribe({
        next : (res : any) =>{
          let arr : Customer[] = [
            res
          ]
          console.log(res);
          this.searchResult = res;
        }
      })
    }
    
  }
}
