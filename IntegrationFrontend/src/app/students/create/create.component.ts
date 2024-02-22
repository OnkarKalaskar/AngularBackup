import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  
  studentForm : student = {
    id : 0,
    name :"",
    age : 0,
    city : ""
  }
  registrationForm : FormGroup;
  isSubmitted : boolean = false;

  constructor(private studentService : StudentsService,private router : Router, private formBuilder : FormBuilder){
    this.registrationForm = formBuilder.group({
      name : new FormControl('',[Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      age : new FormControl('',[Validators.required,Validators.min(10),Validators.max(40)]),
      city : new FormControl('',Validators.required)
    })
  }
  submitForm()
  {
    this.isSubmitted = true;
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm.value.name);
      
      this.studentForm.name = this.registrationForm.value.name;
      this.studentForm.age = this.registrationForm.value.age;
      this.studentForm.city = this.registrationForm.value.city;

      this.studentService.post(this.studentForm)
    .subscribe({
      next : (data) => {
        this.router.navigate(["students/home"])
      },
      error:(er) => {
        console.log(er); 
      }
      
    })
  }
  }
  

}
