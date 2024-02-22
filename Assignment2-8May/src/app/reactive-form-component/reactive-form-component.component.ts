import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent {

  
  myForm = new FormGroup({
      fname : new FormControl(''),
      lname : new FormControl('')
    });

  onSubmit(){
    console.log(this.myForm.value);
    alert("form submitted");
  }
}



