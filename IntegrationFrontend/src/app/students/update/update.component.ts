import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  studId : number = Number(sessionStorage.getItem("studId"));

  existingDetails : student = {
    id :0,
    name :"",
    age : 0,
    city :""
  };

  updatedStud : student = {
    id :0,
    name :"",
    age :0,
    city :""
  };
  flag : boolean = false;

  constructor(private studentService : StudentsService)
  {

  }

  ngOnInit(): void {
    this.getById();
  }


  getById()
  {
    this.studentService.getById(this.studId).subscribe((data) => {
      this.existingDetails = data;
    })
  }

  updateUser()
  {
    console.log(this.studId, this.updatedStud);
    
    this.studentService.updateUser(this.studId, this.updatedStud).subscribe(()=>
    {
      this.ngOnInit();
    });
    this.flag = true;
  }



}
