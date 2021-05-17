import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {AdminComponent } from './admin/admin.component'
import { ParticipantsComponent } from './participants/participants.component';
import { ManagequizComponent } from './managequiz/managequiz.component';
import { ManagequestionsComponent } from './managequestions/managequestions.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'login',component:LoginComponent },
  { path: 'dashboard',component:UserdashboardComponent },
  { path: '', redirectTo: 'quiz' , pathMatch:'full' }

];

const adminRoutes:Routes=[
  { path: 'admin', component: AdminComponent },
  { path: 'admin/participants', component: ParticipantsComponent },
  { path: 'admin/quiz', component:ManagequizComponent  },
  { path: 'admin/questions', component: ManagequestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
