import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-finish-quiz',
  templateUrl: './finish-quiz.component.html',
  styleUrls: ['./finish-quiz.component.css']
})
export class FinishQuizComponent implements OnInit {

  constructor(private service:QuizService) { }

  public questions=[];
  public answers=[];   
  ngOnInit(): void {
    this.questions=this.service.questions;
    this.answers=this.service.getAnswers();
    console.log(this.service.answers);
  }
  question(questionId:number){
    let question=this.service.getQuestion(questionId);
    return question;

  }


}
