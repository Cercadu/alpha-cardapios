import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';
import { CartModalComponent } from '../../components/cart-modal/cart-modal.component';
import { Product, MENU_PRODUCTS, MENU_CATEGORIES } from '../../data/menu-data';

@Component({
  selector: 'app-cardapio-home',
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    CategoryListComponent,
    ProductCardComponent,
    ProductDetailModalComponent,
    CartModalComponent,
  ],
  templateUrl: './cardapio-home.component.html',
  styleUrl: './cardapio-home.component.css',
})
export class CardapioHomeComponent implements OnInit {
  products: Product[] = MENU_PRODUCTS;
  filteredProducts: Product[] = [];
  selectedCategory: string = MENU_CATEGORIES[0];
  searchQuery: string = '';
  selectedProduct: Product | null = null;
  showCart: boolean = false;


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

  openProductDetail(product: Product): void {
    this.selectedProduct = product;
  }

  closeProductDetail(): void {
    this.selectedProduct = null;
  }

  openCart(): void {
    this.showCart = true;
  }

  closeCart(): void {
    this.showCart = false;
  }
}

