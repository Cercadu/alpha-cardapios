import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/menu-data';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
}

