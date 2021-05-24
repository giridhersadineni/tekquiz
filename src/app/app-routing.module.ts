import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {AdminComponent } from './admin/admin.component'
import { ManagequizComponent } from './managequiz/managequiz.component';
import { ManagequestionsComponent } from './managequestions/managequestions.component';
import { FinishQuizComponent } from './finish-quiz/finish-quiz.component';
import { QuestionComponent } from './question/question.component';
import {ParticipantComponent} from './participant/participant.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'quiz',component:QuizComponent,
    children:[
      {path:'question/:questionid',component:QuestionComponent},
    ]

  },
  { path: 'result', component: ResultComponent },
  { path: 'login',component:LoginComponent },
  { path: 'finishquiz',component:FinishQuizComponent },
  { path: 'dashboard',component:UserdashboardComponent },
  { path:'quiz/<questionid>',component:QuestionComponent},
  { path: '', redirectTo: 'dashboard' , pathMatch:'full' }

];

const adminRoutes:Routes=[
  { path: 'admin', component: AdminComponent },
  { path: 'admin/participants', component: ParticipantComponent },
  { path: 'admin/quiz', component:ManagequizComponent  },
  { path: 'admin/questions', component: ManagequestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
