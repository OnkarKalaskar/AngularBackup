import { Component, Input , OnInit } from '@angular/core';
import { Task } from '../Models/task';

@Component({
  selector: 'app-superchildcomponent',
  templateUrl: './superchildcomponent.component.html',
  styleUrls: ['./superchildcomponent.component.css']
})
export class SuperchildcomponentComponent implements OnInit {
  

  @Input() Category : string = ""
  @Input() subCategory : string = ""

  questionsOfThisCat : Task[] = []

  ngOnInit(): void {
    
  }
  
  tasks : Task[] = [
  {questionId : 1,question : "question1",answer : "answer1",
    questionCategory : "category1",
    questionSubCategory : "subcategory1",
    isDeleted : false
  },
  {questionId : 2,question : "question2",answer : "answer2",
  questionCategory : "category1",
  questionSubCategory : "subcategory2",
  isDeleted : false
  },
  {questionId : 3,question : "question3",answer : "answer3",
  questionCategory : "category2",
  questionSubCategory : "subcategory3",
  isDeleted : false
  },
  {questionId : 4,question : "question4",answer : "answer4",
  questionCategory : "category2",
  questionSubCategory : "subcategory4",
  isDeleted : false
  }]


}
