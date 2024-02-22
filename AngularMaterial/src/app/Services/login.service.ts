import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../Models/LoginObj';
import { User } from '../login/UserObj';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticate : boolean = false;
  constructor(private http : HttpClient) { }

  generalLogin(login:Login)
  {
    return this.http.post<Login>("https://localhost:7085/api/Login",login);
  }

  getData()
  {
    let token = sessionStorage.getItem("jwt");
    let head_obj = new HttpHeaders().set("Authorization","bearer "+token);
    return this.http.get<User[]>("",{headers:head_obj});
  }

  getUsers()
  {
    return this.http.get<User[]>("");
  }
  
}
