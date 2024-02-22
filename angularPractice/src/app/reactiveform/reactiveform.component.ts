import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent {

  myForm : FormGroup;
  isSubmitted : boolean = false;

  constructor(private formBuilder : FormBuilder) {

    this.myForm = this.formBuilder.group({
      fname : new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lname : new FormControl('',Validators.required)
    })
  }    

  onSubmit()
  {
    this.isSubmitted = true;
    if(this.myForm.valid)
    {
      console.log("submitted",this.myForm.value);
    }
    else{
      console.log("something wrong");
      
    }
  }

}
