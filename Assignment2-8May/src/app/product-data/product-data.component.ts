  
import { Component , OnInit } from '@angular/core';
import { product1 } from '../ServiceFolder/product1';
import { ProductFinal } from '../ServiceFolder/productData';
import { AngularServiceService } from '../ServiceFolder/angular-service.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css'],
})
export class ProductDataComponent implements OnInit {
  products : product1[] ;

  constructor(private angularService : AngularServiceService){}

  getProducts()
  {
    this.products = this.angularService.getProducts()
  }
  ngOnInit()
  {
    this.getProducts();
  }
}

