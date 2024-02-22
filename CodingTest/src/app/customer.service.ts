import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  addCustomer(payload : Customer)
  {
    return this.http.post('https://localhost:7115/api/Customers',payload);
  }

  getAllCustomers()
  {
    return this.http.get('https://localhost:7115/api/Customers');
  }

  getById(id : number)
  {
    return this.http.get('https://localhost:7115/api/Customers/'+id);
  }

  getGeneralSearch(data : string)
  {
    return this.http.get('https://localhost:7115/api/Customers/search/'+data);
  }

  getByAgeSearch(data : number)
  {
    return this.http.get('https://localhost:7115/api/Customers/searchByAge/'+data);
  }
}
