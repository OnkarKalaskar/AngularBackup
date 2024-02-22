import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  productData : Array<any>;

  constructor()
  {
    this.productData = [
      {"id" : 1,"productName" : "vehicleEqui","price": 300, "path": "../../assets/auto1.jpg"},
    {"id" : 2,"productName" : "MobileStand","price": 200, "path": "../../assets/auto2.jpg"},
    {"id" : 3,"productName" : "air Freshner","price": 400, "path": "../../assets/auto3.jpg"},
    {"id" : 4,"productName" : "helmet","price": 500, "path": "../../assets/auto4.jpg"},
    {"id" : 5,"productName" : "helmet2","price": 200, "path": "../../assets/auto1.jpg"},
    {"id" : 6,"productName" : "food1","price": 4500, "path": "../../assets/auto1.jpg"},
    {"id" : 7,"productName" : "Wallpaper 1","price": 3400, "path": "../../assets/one.jpg"},
    {"id" : 8,"productName" : "Wallpaper 2","price": 3100, "path": "../../assets/two.jpeg"},
    {"id" : 9,"productName" : "Wallpaper 3","price": 4300, "path": "../../assets/three.png"},
    {"id" : 10,"productName" : "Wallpaper 4","price": 5300, "path": "../../assets/four.webp"}
    ]
  }
}


