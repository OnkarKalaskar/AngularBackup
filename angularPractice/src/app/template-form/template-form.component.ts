import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  product : Product = {
    id : 0,
    name : "",
    price : 0
  }

  show : boolean = false;

  isSubmitted : boolean = false;

  onSubmit()
  {
    
    this.isSubmitted = true;
    this.show = true;
  }
}
