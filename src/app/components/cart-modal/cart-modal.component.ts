import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-cart-modal',
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  @Output() close = new EventEmitter<void>();

  protected cartService = inject(CartService);
  protected companyService = inject(CompanyService);

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

    const company = this.companyService.activeCompany();
    const table = this.companyService.tableNumber();

    // Gerar um resumo legível e compacto do pedido para o Garçom/Atendente ler
    let summary = `=== PEDIDO ${company.orderPrefix} ===\n`;
    summary += `MESA: ${table}\n`;
    summary += `-----------------------\n`;
    
    items.forEach(item => {
      const optionText = item.selectedOption ? ` (${item.selectedOption.label})` : '';
      summary += `${item.quantity}x ${item.product.name}${optionText}\n`;
    });

    summary += `-----------------------\n`;
    summary += `TOTAL: R$ ${this.cartService.totalPrice().toFixed(2).replace('.', ',')}\n`;
    summary += `Mesa ${table} agradece! 🔥`;

    this.orderSummaryText = summary;

    // Gerar imagem do QR Code offline colorida no tom da marca
    const colorParam = company.primaryColorRgb.replace(/\s+/g, '').replace(/,/g, '-');
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=${colorParam}&data=${encodeURIComponent(summary)}`;
    
    this.showQrCode = true;
  }

  finishOrder(): void {
    this.cartService.clearCart();
    this.showQrCode = false;
    this.close.emit();
  }
}

