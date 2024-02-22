import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentList : student[] = []
 
  constructor(private studentService : StudentsService)
  {

  }

  ngOnInit() {
    this.get();
  }
  
  get()
  {
    this.studentService.get().subscribe((data) => {
      this.studentList = data;
    })
  }
  
  updateUser(studId : number)
  {
    console.log(studId);
    sessionStorage.setItem("studId",""+studId);
    this.get();
  }

  deleteUser(studId : number)
  {
    this.studentService.deleteUser(studId).subscribe(() =>
    {
      this.ngOnInit();
    })
  }
}
