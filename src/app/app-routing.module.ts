import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuizComponent,
  },
  {
    path: 'result',
    component: QuizResultComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
