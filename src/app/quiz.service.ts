import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuizService {


  public index: number;
  public questions = [];
  public visitedQuestions = [];
  public answers = this.getAnswers();
  public totalQuestions: number;

  constructor(private http: HttpClient) {
    this.index = 0;
    this.fetchQuestions();
    this.totalQuestions = this.questions.length;
  }

  // Reads Questions from API
  // GET : api/questions

  fetchQuestions(): void {
    const url = "https://localhost:44391/api/questions";
    const q = this.http.get<any>(url);
    q.subscribe((data) => {
        this.questions = data;
        this.totalQuestions = this.questions.length;
    });
  }

  getQuestions(): any{
    if (this.questions.length === 0){
      this.fetchQuestions();
      return this.questions;
    }
    else{
      return this.questions;
    }
  }

  getAnswers(): any {
    return JSON.parse(localStorage.getItem("responses"));
  }
  updateResponse(response: any): void {
    const answer = this.answers.find((resp) => resp.questionId === response.questionId);
    if (answer === undefined) {
      this.answers.push(response);
    }
    else {
      answer.response = parseInt(response.response, null );
    }
    console.log(this.answers);
    localStorage.setItem( 'responses' , JSON.stringify(this.answers));
  }
  questionAnswered(questionId): boolean {
    const answered = this.answers.find(question => question.questionId == questionId);
    if (answered === undefined) {
      return false;
    }
    else {
      return true;
    }
  }
  saveAnswer(questionId: number, answer: number): boolean {
    console.log('Hit Quiz Service');
    const response = { questionId: 0, response: 0, correctAnswer: 0 };
    const question = this.questions.find (question  => question.QnID === questionId );
    if (question === undefined) {
      console.log('Quiz Service::SaveAnswer : Question Not Found');
      return false;
    }
    else {
      response.questionId = questionId;
      response.response = answer;
      response.correctAnswer = question?.answer;
      this.updateResponse(response);
      return true;
    }
  }
  getSavedAnswer(questionId): number {
    if (this.questionAnswered(questionId)) {
      return this.answers.find( question => question.QnID = questionId ).response;
    }
    else {
      return 999;
    }
  }
  getQuestion(questionId: number): Question {
    const question = this.questions.find( question => question.QnID == questionId);
    return question;
  }
  getTotalQuestions(): number {
    return this.totalQuestions;
  }
  getTotalAnswered(): number {
    return this.answers.length;
  }
  nextQuestion(): Question {
    if (this.index < this.questions.length) {
      return this.questions[this.index++];
    }
    else {
      this.index = 0;
      return this.questions[this.index];
    }

  }
  finalresult(): any {
    let result = { score: 0, answeredQuestions: 0, totalquestions: 0, correctanswers: 0 };
    let score = 0;
    const answers = this.getAnswers();
    let correctanswers = 0;
    answers.forEach((q) => {
      console.log(q);
      if (q.response == q.correctAnswer) {
        score++;
        correctanswers++;
      }
    });
    result.score = score;
    result.answeredQuestions = this.answers.length;
    result.totalquestions = this.questions.length;
    result.correctanswers = correctanswers;
    console.log(result);
    return result;
  }

}
