import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_CATEGORIES } from '../../data/menu-data';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories: string[] = MENU_CATEGORIES;
  selectedCategory: string = MENU_CATEGORIES[0];

  @Output() categoryChange = new EventEmitter<string>();

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
  }
}

