import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Users } from './UserList';
import { User } from './UserObj';
import { LoginService } from '../Services/login.service';
import { Login } from '../Models/LoginObj';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup;
  hide : boolean = false;
  userList : User[];
  flag : boolean = false;
  username : string = "";
  login : Login = {
    email :"",
    password :""
  };
  invalidUser : boolean = false;

  constructor(private formBuilder : FormBuilder, private loginService : LoginService, private router : Router)
  {
    this.userList = Users;
    this.loginForm = formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  onSubmit()
  {
    this.login.email = this.loginForm.value.email;
    this.login.password = this.loginForm.value.password;

    this.loginService.generalLogin(this.login).subscribe(
      response =>{
        let token = (<any>response).token;
        localStorage.setItem("jwt",token);
        this.router.navigate(["/userHome"]);
      },
      err =>{
        this.invalidUser = true;
        this.router.navigate(["/login"]);
      }
    )
  }
}
