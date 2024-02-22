import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  myform : FormGroup;
  isSubmitted : boolean = false;
  allCustomers : Customer[] = []
  customerObj : Customer = {
    customerId :0,
    customerName : '',
    age : 0,
    branch : '',
    salary : 0,
    city : ''
  };

  constructor(private formBuilder : FormBuilder , private customerService : CustomerService, private router : Router){
    this.myform = formBuilder.group({
      customerName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
      age : new FormControl('',Validators.required),
      salary : new FormControl('',Validators.required),
      city : new FormControl('', Validators.required),
      branch : new FormControl('',Validators.required)

    })
  }

  ngOnInit(): void {
    this.getAllCustomers();
  }
  
  getAllCustomers()
  {
    this.customerService.getAllCustomers().subscribe({
      next : (res : any)=>{
        this.allCustomers = res;
        console.log(this.allCustomers);
        
      }
    })
  }
  

  onSubmit()
  {
    this.isSubmitted = true;
    if(this.myform.valid)
    {
      this.customerObj.customerName = this.myform.value.customerName;
      this.customerObj.age = this.myform.value.age;
      this.customerObj.salary = this.myform.value.salary;
      this.customerObj.city = this.myform.value.city;
      this.customerObj.branch = this.myform.value.branch;

      console.log(this.customerObj);
      
      this.customerService.addCustomer(this.customerObj).subscribe({
        
        
        next : (res : any) =>
        {
          console.log("hello");
          if(res.message=="Added")
          {
            alert("customer added successfully");
          }
          else{
            alert("Customer not added");
          }
        }
      })

    }
  }
 
}
