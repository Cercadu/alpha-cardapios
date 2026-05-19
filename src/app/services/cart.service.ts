import { Injectable, signal, computed } from '@angular/core';
import { Product, PriceOption } from '../data/menu-data';

export interface CartItem {
  id: string; // ID único que combina o ID do produto e a opção selecionada
  product: Product;
  quantity: number;
  selectedOption?: PriceOption;
  singlePrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Signal reativo para gerenciar os itens do carrinho
  private cartItemsSignal = signal<CartItem[]>([]);

  // Sinais computados para leituras reativas na interface
  cartItems = computed(() => this.cartItemsSignal());
  
  itemsCount = computed(() => {
    return this.cartItemsSignal().reduce((acc, item) => acc + item.quantity, 0);
  });

  totalPrice = computed(() => {
    return this.cartItemsSignal().reduce((acc, item) => acc + (item.singlePrice * item.quantity), 0);
  });

  addToCart(product: Product, quantity: number, selectedOption?: PriceOption): void {
    const optionId = selectedOption ? `-${selectedOption.label.replace(/\s+/g, '')}` : '';
    const itemId = `${product.id}${optionId}`;
    const price = selectedOption ? selectedOption.value : product.price;

    this.cartItemsSignal.update(items => {
      const existingItemIndex = items.findIndex(item => item.id === itemId);

      if (existingItemIndex > -1) {
        // Se já existe, atualiza a quantidade
        const updatedItems = [...items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // Se é novo, adiciona no fim
        return [...items, {
          id: itemId,
          product,
          quantity,
          selectedOption,
          singlePrice: price
        }];
      }
    });
  }

  removeFromCart(itemId: string): void {
    this.cartItemsSignal.update(items => items.filter(item => item.id !== itemId));
  }

  updateQuantity(itemId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }
    this.cartItemsSignal.update(items => items.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    ));
  }

  clearCart(): void {
    this.cartItemsSignal.set([]);
  }
}
