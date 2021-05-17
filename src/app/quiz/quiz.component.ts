import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  public questions:any=[];
  constructor(private service:QuizService) { 
    this.questions=this.service.getQuestions();
  }
  
  ngOnInit(): void {
    console.log(this.questions);
  }


}
