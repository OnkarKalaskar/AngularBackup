import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalDetails } from './Models/personalDetails';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http : HttpClient) { }


  addUser(personalDetailsObj:PersonalDetails) : Observable<any>{
    return this.http.post<PersonalDetails>("https://localhost:7063/api/PersonalDetails",personalDetailsObj);
  } 

}
