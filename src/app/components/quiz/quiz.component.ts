import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { QuizResult } from 'src/app/models/question.model';
import { UserSelection } from 'src/app/models/user-selection.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();
  questions: QuizResult[] = [];

  constructor(private quizService: QuizService) {}

  /**
   * Fetch the questions from the API based on the seleced category and difficulty by user
   */
  createQuiz(userSelection: UserSelection): void {
    this.quizService
      .getQuestions(userSelection.category, userSelection.difficulty)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: QuizResult[]) => {
          this.questions = response;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
