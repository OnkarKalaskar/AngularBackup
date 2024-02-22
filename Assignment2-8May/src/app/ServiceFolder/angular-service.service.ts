import { Injectable } from '@angular/core';
import { product1 } from './product1';
import { ProductFinal } from './productData';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  getProducts() {
    return ProductFinal;
  }
  
  constructor() { }
}
