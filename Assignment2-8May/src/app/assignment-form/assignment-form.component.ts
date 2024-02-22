import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent {

  form1 : FormGroup;
  isSubmitted : boolean = false;

  constructor(private formBuilder : FormBuilder)
  {
    this.form1 = this.formBuilder.group({
      Name : new FormControl('',[Validators.required,Validators.minLength(3)]),
      City : new FormControl('',Validators.required),
      Email : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
    })
  }
  ngOnInit(){

  }

  onRegistrationFormSubmit()
  {
    this.isSubmitted = true;
    if(this.form1.valid)
    {
      console.log("submitted", this.form1.value);
    }
    else
    {
        console.log("something wrong");    
    }
  }
}
