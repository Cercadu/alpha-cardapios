import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, hasUniformOptionPrices, getCardDisplayPrice } from '../../data/menu-data';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() clickCard = new EventEmitter<Product>();

  protected readonly hasUniformOptionPrices = hasUniformOptionPrices;
  protected readonly getCardDisplayPrice = getCardDisplayPrice;
}

