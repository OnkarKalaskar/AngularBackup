import { Component } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  model= new product(1,"cheese",3,"pune");
  submitted = false;
  display : boolean = false;

  onSubmit(){
    this.submitted = true;
    this.display = true;
    console.log(this.model);
  }
}
