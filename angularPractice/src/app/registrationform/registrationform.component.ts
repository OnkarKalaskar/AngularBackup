import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { confirmPasswordValidator } from '../confirm-password.validator';
import { PersonalDetails } from '../Models/personalDetails';
import { RegisteruserService } from '../registeruser.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  personalDetailsForm : FormGroup;
  isSubmitted : boolean = false;

  educationalDetailsFlag : boolean = true;
 
  personalDetailsObj : PersonalDetails = {

    userId: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    pincode: 0,
    mobileNumber: 0
  }

  constructor(private formBuilder : FormBuilder, private datePipe : DatePipe, private userService : RegisteruserService){
    this.personalDetailsForm = formBuilder.group({
      firstName : new FormControl('',Validators.required),
      lname : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
      password : new FormControl('',[Validators.required]),
      confirmPassword : new FormControl('',[Validators.required]),
      validators : confirmPasswordValidator,
      birthDate: new FormControl('',Validators.required),
      gender : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      pincode : new FormControl('', [Validators.required, Validators.min(111111),Validators.max(999999)]),
      mobile : new FormControl('',[Validators.required, Validators.max(100000000), Validators.min(9999999999)])
    })
  }

  submitPersonalDetails()
  {
    this.isSubmitted = true;

    if(this.personalDetailsForm.valid)
    {
    
      this.personalDetailsObj.fname = this.personalDetailsForm.value.firstName;
      this.personalDetailsObj.lname = this.personalDetailsForm.value.lname;
      this.personalDetailsObj.email = this.personalDetailsForm.value.email;
      this.personalDetailsObj.password = this.personalDetailsForm.value.password;
      this.personalDetailsObj.dateOfBirth = this.datePipe.transform(this.personalDetailsForm.get('birthDate')?.value,'dd/MM/yyyy');
      this.personalDetailsObj.gender = this.personalDetailsForm.value.gender;
      this.personalDetailsObj.address = this.personalDetailsForm.value.address;
      this.personalDetailsObj.pincode = this.personalDetailsForm.value.pincode;
      this.personalDetailsObj.mobileNumber= this.personalDetailsForm.value.mobile;
  
      
      console.log(this.personalDetailsForm.value);
      console.log(this.personalDetailsObj);

      this.userService.addUser(this.personalDetailsObj).subscribe({
        next : (res) =>{
          alert("personal details added");
          console.log(res);
        }
      })
    }

  }



  

}
