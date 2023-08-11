export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Questions {
  response_code: number;
  results: Question[];
}

export interface QuizResult extends Question {
  options: string[];
  answer: string;
}