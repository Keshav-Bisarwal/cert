import { Component, OnInit } from '@angular/core';
import { QuizResult } from 'src/app/models/question.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent implements OnInit {
  questions: QuizResult[];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.questions = this.quizService.questions;
  }
}
