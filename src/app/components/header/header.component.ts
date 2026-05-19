import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>();
  @Output() openCart = new EventEmitter<void>();

  protected cartService = inject(CartService);

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }

  onCartClick(): void {
    this.openCart.emit();
  }
}
