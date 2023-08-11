import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ENDPOINTS } from 'src/app/constants/api-endpoints.constant';
import { Categories, Category } from 'src/app/models/quiz-category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Categories>(ENDPOINTS.CATEGORIES).pipe(
      map(({ trivia_categories }: Categories) => {
        return trivia_categories;
      })
    );
  }
}
