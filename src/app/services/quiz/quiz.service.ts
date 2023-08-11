import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { ENDPOINTS } from 'src/app/constants/api-endpoints.constant';
import { QUESTIONS_COUNT } from 'src/app/constants/quiz.constant';
import { Question, Questions, QuizResult } from 'src/app/models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _questions: QuizResult[] = [];

  constructor(private http: HttpClient) {}

  private shuffleOptions(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private modifyQuestions(results: Question[]): QuizResult[] {
    return results.map((question: Question) => ({
      ...question,
      options: this.shuffleOptions([
        question.correct_answer,
        ...question.incorrect_answers,
      ]),
      answer: '',
    }));
  }

  getQuestions(category: number, difficulty: string): Observable<QuizResult[]> {
    const queryParamsObj: { [key: string]: string | number } = {
      amount: QUESTIONS_COUNT,
      type: 'multiple',
      category,
      difficulty,
    };

    return this.http
      .get<Questions>(ENDPOINTS.QUESTIONS, {
        params: queryParamsObj,
      })
      .pipe(map((quiz: Questions) => this.modifyQuestions(quiz.results)));
  }

  set questions(questions: QuizResult[]) {
    this._questions = questions;
  }

  get questions() {
    return this._questions;
  }
}
