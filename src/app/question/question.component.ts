import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question:any;
 
  public answerSelected:Number;
  constructor() { 
    this.answerSelected=0
  }

  hasImage(){
    if (this.question.ImageName===null){
      return true;
    }
    else{
      return false;
    }
  }


  ngOnInit(): void {
    
  }

  answerQuestion(){
    
  }
  

}
