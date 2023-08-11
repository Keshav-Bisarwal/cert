import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DIFFICULTY_LEVELS } from 'src/app/constants/difficulty-levels.constant';
import { DifficultyLevel } from 'src/app/models/difficulty-level.model';
import { Category } from 'src/app/models/quiz-category.model';
import { UserSelection } from 'src/app/models/user-selection.model';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent {
  @Output() formSubmit = new EventEmitter<UserSelection>();
  categories$: Observable<Category[]> = this.categoryService.getCategories();
  difficultyLevels: DifficultyLevel[] = DIFFICULTY_LEVELS;

  // Form models
  selectedCategory: string;
  selectedDifficulty: string;

  constructor(private categoryService: CategoryService) {}

  /**
   * Pass the form data to the parent component
   */
  submit(quizForm: NgForm) {
    if (quizForm.valid) {
      this.formSubmit.emit(quizForm.value);
    }
  }
}
