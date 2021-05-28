import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './quiz.service';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ManagequizComponent } from './managequiz/managequiz.component';
import { ManagequestionsComponent } from './managequestions/managequestions.component';
import { FinishQuizComponent } from './finish-quiz/finish-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantComponent } from './participant/participant.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicService } from './services/topic.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    LoginComponent,
    QuestionComponent,
    AdminComponent,
    AdminnavbarComponent,
    UserdashboardComponent,
    ManagequizComponent,
    ManagequestionsComponent,
    FinishQuizComponent,
    ParticipantComponent,
    TopicFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [QuizService,TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
