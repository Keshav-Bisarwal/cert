import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS_COUNT } from 'src/app/constants/quiz.constant';
import { QuizResult } from 'src/app/models/question.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() questions: QuizResult[];
  @Input() isResultsPage: boolean = false;

  attemptedQuestions: boolean[] = [];
  questionsCount = QUESTIONS_COUNT;
  score: number = 0;

  constructor(private router: Router, private quizService: QuizService) {}

  ngOnInit(): void {
    if (this.isResultsPage) {
      this.calculateScore();
    }
  }

  /**
   * Calculate the score of the user
   */
  calculateScore(): void {
    this.score = this.questions.reduce((correctQuestionCount, question) => {
      if (question.answer === question.correct_answer) {
        return correctQuestionCount + 1;
      }
      return correctQuestionCount;
    }, 0);
  }

  /**
   * Update the user's response in the question's answer property
   */
  addResponse(response: string, questionIndex: number): void {
    if (!this.isResultsPage) {
      this.attemptedQuestions[questionIndex] = true;
      this.questions[questionIndex].answer = response;
    }
  }

  /**
   * Submit the quiz or navigate to new questionnare form depending on current page
   */
  submit(): void {
    if (this.isResultsPage) {
      this.router.navigate(['/']);
    } else {
      this.quizService.questions = this.questions;
      this.router.navigate(['result']);
    }
  }
}
