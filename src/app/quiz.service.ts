import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  
  
  public questions = [
    {
      QnID: 3,
      Qn: 'Who invented the first computer ?',
      ImageName: null,
      Options: [
        'Charles Babbage',
        'Linus Torvalds',
        'Dennis Ritchie',
        'James sling',
      ],
      answer: 0,
    },
    {
      QnID: 13,
      Qn: 'Inside which HTML element do we put the JavaScript?',
      ImageName: null,
      Options: ['<javascript>', '<js>', '<scripting>', '<script>'],
      answer: 3,
    },
    {
      QnID: 7,
      Qn: "Which of the following is the 1's complement of 10?",
      ImageName: null,
      Options: ['01', '110', '11', '10'],
      answer: 0,
    },
    {
      QnID: 10,
      Qn: 'You can add a row using SQL in a database with which of the following?',
      ImageName: null,
      Options: ['ADD', 'CREATE', 'INSERT', 'MAKE'],
      answer: 2,
    },
    {
      QnID: 15,
      Qn: 'How can you add a comment in a JavaScript?',
      ImageName: null,
      Options: [
        "'This is a comment",
        '<!--This is a comment-->',
        '//This is a comment',
        null,
      ],
      answer: 2,
    },
    {
      QnID: 8,
      Qn: 'The binary system uses powers of',
      ImageName: null,
      Options: ['2', '10', '8', '16'],
      answer: 0,
    },
    {
      QnID: 6,
      Qn: 'Which of the following computer language is used for artificial intelligence?',
      ImageName: null,
      Options: ['FORTRAN', 'PROLOG', 'C', 'COBOL'],
      answer: 1,
    },
    {
      QnID: 9,
      Qn: 'A computer program that convert sassembly language to machine language is',
      ImageName: null,
      Options: ['Compiler', 'Interpreter', 'Assembler', 'Comparator'],
      answer: 2,
    },
    {
      QnID: 1,
      Qn: 'What does HTML stand for?',
      ImageName: null,
      Options: [
        'Hyper Trainer Marking Language',
        'Hyper Text Marketing Language',
        'Hyper Text Markup Language',
        'Hyper Text Markup Leveler',
      ],
      answer: 2,
    },
    {
      QnID: 35,
      Qn: 'Find mistake in the following life cycle hook events',
      ImageName: "https://23o0161033pm1289qo1hzrwi-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Angular-Components.png.webp",
      Options: [
        'ngOnDestroy is not a hook method ',
        'ngAfterViewInit is checked before nfAfterContentInit',
        'ngDoCheck is not a hook method',
        'There is no Mistake',
      ],
      answer: 2,
    },
  ];
  public index:number;
  public totalQuestions=this.questions.length;
  public visitedQuestions=[];
  public answers = [];

  constructor() {
    this.index=0;
  }

  

  getQuestions() {
    return this.questions;
  }

  getAnswers(){
    return JSON.parse(localStorage.getItem("responses"));
  }

  updateResponse(response:any){
    let answer=this.answers.find((resp)=>resp.questionId === response.questionId);
    if (answer===undefined){
      this.answers.push(response);
    }
    else{
      answer.response=response.response;
    }
    console.log(this.answers);
    localStorage.setItem("responses",JSON.stringify(this.answers));
  }

  saveAnswer(questionId: number, answer: number) {
    console.log("Hit Quiz Service");
    const response = { questionId: 0, response: 0, correctAnswer: 0 };
    const question = this.questions.find(
      (question) => question.QnID === questionId
    );
    if (question === undefined) {
      console.log('Quiz Service::SaveAnswer : Question Not Found');
    } else {
      response.questionId = questionId;
      response.response = answer;
      response.correctAnswer = question?.answer;
      this.updateResponse(response);
    }
  }

  checkQuizAnswers(){

  }


   getQuestion (questionId:any) {
    let qid=parseInt(questionId);   
    console.log(qid);
    let question = this.questions.find(question=> question.QnID==qid);
      return question;
   }
  

   getTotalQuestions(){
     return this.totalQuestions;
   }

  getTotalAnswered(){
    return this.answers.length;
  }



   nextQuestion(){
     if (this.index<this.questions.length){
       return this.questions[this.index++];
      }
      else{
        this.index=0;
        return this.questions[this.index];
      }

   }



}
