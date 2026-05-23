import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  @Output() categoryChange = new EventEmitter<string>();

  protected companyService = inject(CompanyService);
  selectedCategory: string = '';
  private lastCompanyId = '';

  get categories(): string[] {
    return this.companyService.activeCompany().categories;
  }

  get currentSelectedCategory(): string {
    const compId = this.companyService.activeCompany().id;
    if (this.lastCompanyId !== compId) {
      this.lastCompanyId = compId;
      this.selectedCategory = this.categories[0];
      // Emit the default category for the new company
      setTimeout(() => this.categoryChange.emit(this.selectedCategory), 0);
    }
    return this.selectedCategory;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
  }
}


