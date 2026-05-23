import { Component, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductDetailModalComponent } from '../../components/product-detail-modal/product-detail-modal.component';
import { CartModalComponent } from '../../components/cart-modal/cart-modal.component';
import { AdminModalComponent } from '../../components/admin-modal/admin-modal.component';
import { Product } from '../../data/menu-data';
import { CompanyService } from '../../services/company.service';

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
    AdminModalComponent,
  ],
  templateUrl: './cardapio-home.component.html',
  styleUrl: './cardapio-home.component.css',
})
export class CardapioHomeComponent implements OnInit {
  protected companyService = inject(CompanyService);
  
  filteredProducts: Product[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  selectedProduct: Product | null = null;
  showCart: boolean = false;
  showAdmin: boolean = false;

  get products(): Product[] {
    return this.companyService.activeCompany().products;
  }

  constructor() {
    // Escuta mudanças de empresa para refiltrar
    effect(() => {
      // Registrar dependência do sinal activeCompany
      const comp = this.companyService.activeCompany();
      this.filterProducts();
    });
  }

  ngOnInit(): void {
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
      const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory;
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

  openAdmin(): void {
    this.showAdmin = true;
  }

  closeAdmin(): void {
    this.showAdmin = false;
  }
}


