import { Component} from '@angular/core';
import { student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent {

  sId : number = 0;
  student : student = new student(0,"","",0);
  
  flag : boolean = false;

  constructor(private studentService : StudentsService){  }



  getById()
  {
    this.flag = true;
    this.studentService.getById(this.sId).subscribe((data) => {
      this.student = data;
    })
  }

}
