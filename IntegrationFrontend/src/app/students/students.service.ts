import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http : HttpClient) { }

  get()
  {
    return this.http.get<student[]>("https://localhost:7189/api/Student");
  }

  post(payload:student)
  {
    return this.http.post<student[]>("https://localhost:7189/api/Student",payload);
  }

  getById(id : number)
  {
    return this.http.get<student>("https://localhost:7189/api/Student/"+id);
  }

  updateUser(id : number, studentObj : student)
  {
    return this.http.put<student>("https://localhost:7189/api/Student/"+id,studentObj);
  }

  deleteUser(id : number)
  {
    return this.http.delete<student>("https://localhost:7189/api/Student?id="+id);
  }
  
  
}
