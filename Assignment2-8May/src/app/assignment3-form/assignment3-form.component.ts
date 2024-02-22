import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment3-form',
  templateUrl: './assignment3-form.component.html',
  styleUrls: ['./assignment3-form.component.css']
})
export class Assignment3FormComponent {

  registrationForm : FormGroup;
  isSubmitted : boolean = false;
  countries : any = ["india", "USA", "UK","UAE", "china"];

  constructor(private formBuilder : FormBuilder)
  {
    this.registrationForm = formBuilder.group({
      Name : new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      Age : new FormControl('',[Validators.required,Validators.min(18),Validators.max(24)]),
      Gender : new FormControl('',[Validators.required]),
      Country : new FormControl('',Validators.required),
      City : new FormControl('',Validators.required),
      Education : new FormControl('',Validators.required),
      Address : new FormControl('',Validators.required),
      Phone : new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      Email : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]) 
    })
  }
  ngOnInit(){

  }

  onFormSubmit()
  {
    this.isSubmitted = true;
    // console.log(this.registrationForm.value);
    
    if(this.registrationForm.valid)
    {
      console.log("Submitted",this.registrationForm.value);
    }
  }

  get Country()
  {
    return this.registrationForm.get('Country');
  }
  
  changeCountry(e)
  {
    console.log(e.value);
    this.Country.setValue(e.target.value,{
      onlySelf : true
    })  
  }

  
}
