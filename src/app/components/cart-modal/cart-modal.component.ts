import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  @Output() close = new EventEmitter<void>();

  protected cartService = inject(CartService);

  showQrCode: boolean = false;
  qrCodeUrl: string = '';
  orderSummaryText: string = '';

  incrementQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decrementQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.id);
  }

  closeCart(): void {
    if (!this.showQrCode) {
      this.close.emit();
    } else {
      this.showQrCode = false;
    }
  }

  generateOrderQr(): void {
    const items = this.cartService.cartItems();
    if (items.length === 0) return;

    // Gerar um resumo legível e compacto do pedido para o Garçom ler
    let summary = `=== PEDIDO SKINÃO GRILL ===\n`;
    summary += `MESA: 12\n`;
    summary += `-----------------------\n`;
    
    items.forEach(item => {
      const optionText = item.selectedOption ? ` (${item.selectedOption.label})` : '';
      summary += `${item.quantity}x ${item.product.name}${optionText}\n`;
    });

    summary += `-----------------------\n`;
    summary += `TOTAL: R$ ${this.cartService.totalPrice().toFixed(2).replace('.', ',')}\n`;
    summary += `Mesa 12 agradece! 🔥`;

    this.orderSummaryText = summary;

    // Usando a API de QR Code para gerar uma imagem offline de 300x300 pixel, colorida no vermelho da marca (217, 56, 41)
    const colorParam = '217-56-41'; // RGB de #d93829
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=${colorParam}&data=${encodeURIComponent(summary)}`;
    
    this.showQrCode = true;
  }

  finishOrder(): void {
    // Limpar o carrinho e fechar tudo
    this.cartService.clearCart();
    this.showQrCode = false;
    this.close.emit();
  }
}
