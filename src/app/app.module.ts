import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { QuizComponent } from './components/quiz/quiz.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './components/question/question.component';
import { CategorySelectionComponent } from './components/category-selection/category-selection.component';
import { ScoreBoardHighlightDirective } from './directives/score-board-highlight.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizResultComponent,
    QuestionComponent,
    CategorySelectionComponent,
    ScoreBoardHighlightDirective,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
