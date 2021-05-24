import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { from, Observable } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() question;

  public questionid = 0;
  public answerSelected;
  public savedAnswer={};

  
  constructor(private service: QuizService, private router: ActivatedRoute) {
    this.answerSelected = 999;
    this.savedAnswer = false;
    this.question = this.service.nextQuestion();
    this.savedAnswer=this.service.answers.find(q=>q.QnID == this.questionid);
  }

  hasImage() {
    if (this.question.ImageName == null) {
      // console.log("It has no Image");
      return false;
    } else {
      // console.log("It has no Image");
      return true;
    }
  }


  
  isAnswered() {
    if (this.answerSelected != 999) {
      // console.log("It has no Image");
      return true;
    } else {
      // console.log("It has no Image");
      return false;
    }
  }

  ngOnInit(): void {
    this.questionid = parseInt(this.router.snapshot.paramMap.get('questionid'));
    this.question = this.service.getQuestion(this.questionid);
  }

  nextQuestion() {
    this.question = this.service.nextQuestion();
  }

  answerQuestion() {
    if (this.answerSelected == 999) {
      alert('Please Select an Answer');
    } else {
      this.service.saveAnswer(this.question.QnID, this.answerSelected);
    }
  }
}
