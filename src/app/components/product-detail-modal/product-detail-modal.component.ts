import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/menu-data';
import { CartService } from '../../services/cart.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-product-detail-modal',
  imports: [CommonModule],
  templateUrl: './product-detail-modal.component.html',
  styleUrl: './product-detail-modal.component.css',
})
export class ProductDetailModalComponent implements OnInit {
  @Input() product!: Product;
  @Output() close = new EventEmitter<void>();

  private cartService = inject(CartService);
  protected companyService = inject(CompanyService);

  quantity: number = 1;
  selectedPriceIndex: number = 0;
  showToast: boolean = false;
  toastMessage: string = '';

  ngOnInit(): void {
    // Reset inputs
    this.quantity = 1;
    this.selectedPriceIndex = 0;
  }

  increment(): void {
    if (this.quantity < 20) {
      this.quantity++;
    }
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  selectPrice(index: number): void {
    this.selectedPriceIndex = index;
  }

  get currentPrice(): number {
    if (this.product.prices && this.product.prices.length > 0) {
      return this.product.prices[this.selectedPriceIndex].value;
    }
    return this.product.price;
  }

  addToCart(): void {
    const selectedOption = this.product.prices && this.product.prices.length > 0
      ? this.product.prices[this.selectedPriceIndex]
      : undefined;

    // Adiciona o produto ao carrinho de verdade
    this.cartService.addToCart(this.product, this.quantity, selectedOption);

    const selectedOptionText = selectedOption
      ? ` (${selectedOption.label})`
      : '';
    
    this.toastMessage = `${this.quantity}x ${this.product.name}${selectedOptionText} adicionado ao pedido!`;
    this.showToast = true;

    // Aguarda a animação do toast e fecha o modal
    setTimeout(() => {
      this.showToast = false;
      this.close.emit();
    }, 1500);
  }
}
