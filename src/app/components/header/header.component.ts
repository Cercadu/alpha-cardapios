import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CompanyService } from '../../services/company.service';
import { isLogoImage } from '../../data/company-data';
import { ALPHA_ARTES } from '../../data/alpha-artes';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>();
  @Output() openCart = new EventEmitter<void>();
  @Output() openAdmin = new EventEmitter<void>();

  protected cartService = inject(CartService);
  protected companyService = inject(CompanyService);
  protected readonly isLogoImage = isLogoImage;
  protected readonly alphaArtesInstagram = ALPHA_ARTES.instagramUrl;

  get searchPlaceholder(): string {
    const company = this.companyService.activeCompany();
    return company.searchPlaceholder ?? `Buscar no cardápio de ${company.name}...`;
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }

  onCartClick(): void {
    this.openCart.emit();
  }

  onAdminClick(): void {
    this.openAdmin.emit();
  }
}

