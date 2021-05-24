import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import{ActivatedRoute} from '@angular/router';
import {Subscription,interval} from 'rxjs';
import {FormsModule} from '@angular/forms';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
<<<<<<< HEAD
  export class QuizComponent implements OnInit {
  
  public questions:any=[];
  public totalquestions:number;
  public totalanswered:number;
  public question;
  public time:number;
  public timer; 
  private subscription: Subscription;
  constructor(private service:QuizService,private route:ActivatedRoute) { 
    this.totalquestions=this.service.getTotalQuestions();
    this.totalanswered=this.service.getTotalAnswered();
    this.question=this.service.nextQuestion();
  }
  
  ngOnInit(): void {
    this.time=this.totalquestions*30-1;
    this.subscription=interval(1000)
    .subscribe(x=>{ this.tick(); });
    this.question=this.service.nextQuestion();
=======
export class QuizComponent implements OnInit {

  public questions: any = [];
  public totalquestions: number;
  public totalanswered: number;
  public time: number;
  public timer;
  private subscription: Subscription;
  public question;

  constructor(private service: QuizService, private route: ActivatedRoute, private router: Router) {
    this.questions = this.service.getQuestions();
    this.totalanswered = this.service.getTotalAnswered();
    this.question = this.service.nextQuestion();
  }
  
  ngOnInit(): void {
    this.totalquestions = this.service.getTotalQuestions();
    console.log(this.totalquestions);
    this.time = this.service.totalQuestions * 60 + 100;
    this.subscription = interval(1000)
    .subscribe(x => { this.tick(); });
    this.question = this.service.nextQuestion();
>>>>>>> a844a811696c6f52077bd1aecf5411937728201d
  }
  
  

  tick() {
    this.totalanswered = this.service.getTotalAnswered();
    if (this.time > 0) {
      this.time--;
    }
    else if (this.time == 0) {
      this.subscription.unsubscribe();
      clearInterval(this.timer);
      alert("Time Up");
      // this.router.navigate([ "finishquiz" ]);
    }
  }





  endQuiz() {
    let submit = confirm("Do you want to Finish Exam and Submit");
    if (submit) {
      window.location.href = 'finishquiz';
    }
    else {

    }

  }




}
