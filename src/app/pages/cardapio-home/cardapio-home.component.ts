import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product, MENU_PRODUCTS, MENU_CATEGORIES } from '../../data/menu-data';

@Component({
  selector: 'app-cardapio-home',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    CategoryListComponent,
    ProductCardComponent,
  ],
  templateUrl: './cardapio-home.component.html',
  styleUrl: './cardapio-home.component.css',
})
export class CardapioHomeComponent implements OnInit {
  products: Product[] = MENU_PRODUCTS;
  filteredProducts: Product[] = [];
  selectedCategory: string = MENU_CATEGORIES[0];
  searchQuery: string = '';

  ngOnInit(): void {
    this.filterProducts();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.filterProducts();
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory = product.category === this.selectedCategory;
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) || 
        (product.description && product.description.toLowerCase().includes(query));
      
      return matchesCategory && matchesSearch;
    });
  }
}

