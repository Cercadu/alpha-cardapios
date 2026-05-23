import { Component, Output, EventEmitter, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { COMPANIES_CONFIG, CompanyConfig, isLogoImage } from '../../data/company-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-modal.component.html',
  styleUrl: './admin-modal.component.css'
})
export class AdminModalComponent {
  @Output() close = new EventEmitter<void>();

  protected companyService = inject(CompanyService);
  protected readonly isLogoImage = isLogoImage;
  private platformId = inject(PLATFORM_ID);

  // Estados locais do gerador
  selectedCompanyId = signal<string>('skinao');
  tableNum = signal<string>('12');
  defaultCompanyId = signal<string>('skinao');

  // Computed para buscar os configs
  companies = computed(() => Object.values(COMPANIES_CONFIG));
  selectedCompanyConfig = computed(() => COMPANIES_CONFIG[this.selectedCompanyId()]);

  // Link gerado dinamicamente
  generatedLink = computed(() => {
    if (isPlatformBrowser(this.platformId)) {
      const origin = window.location.origin;
      const path = window.location.pathname;
      return `${origin}${path}?empresa=${this.selectedCompanyId()}&mesa=${this.tableNum()}`;
    }
    return '';
  });

  // URL do QR code colorido conforme tema do estabelecimento
  qrCodeUrl = computed(() => {
    const link = this.generatedLink();
    if (!link) return '';
    const rgbColor = this.selectedCompanyConfig().primaryColorRgb.replace(/\s+/g, '').replace(/,/g, '-');
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=${rgbColor}&data=${encodeURIComponent(link)}`;
  });

  showCopySuccess = false;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Carrega empresa padrão salva
      const saved = localStorage.getItem('company_default');
      if (saved && COMPANIES_CONFIG[saved]) {
        this.defaultCompanyId.set(saved);
      }
      
      // Define a empresa selecionada inicialmente como a ativa no momento
      this.selectedCompanyId.set(this.companyService.activeCompany().id);
      this.tableNum.set(this.companyService.tableNumber());
    }
  }

  changeDefaultCompany(companyId: string): void {
    this.defaultCompanyId.set(companyId);
    this.companyService.setDefaultCompany(companyId);
  }

  copyLink(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.generatedLink()).then(() => {
        this.showCopySuccess = true;
        setTimeout(() => this.showCopySuccess = false, 2500);
      });
    }
  }

  testLink(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Abre o link na mesma janela para testar e recarregar o tema
      window.location.href = this.generatedLink();
    }
  }

  printQr(): void {
    if (isPlatformBrowser(this.platformId)) {
      const config = this.selectedCompanyConfig();
      const logoHtml = isLogoImage(config.logo)
        ? `<img class="brand-logo" src="${config.logo}" alt="${config.name}" />`
        : `<div class="logo-emoji">${config.logo}</div>`;

      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>QR Code - ${config.name} - Mesa ${this.tableNum()}</title>
              <style>
                body { 
                  display: flex; 
                  flex-direction: column; 
                  align-items: center; 
                  justify-content: center; 
                  height: 90vh; 
                  margin: 0; 
                  font-family: 'Inter', sans-serif; 
                  text-align: center; 
                  color: #1a1a1a;
                }
                .container {
                  border: 2px solid rgba(0,0,0,0.1);
                  padding: 40px;
                  border-radius: 24px;
                  box-shadow: 0 8px 30px rgba(0,0,0,0.05);
                  max-width: 400px;
                }
                .logo-emoji {
                  font-size: 40px;
                  margin-bottom: 10px;
                }
                .brand-logo {
                  width: 64px;
                  height: 64px;
                  object-fit: contain;
                  margin-bottom: 10px;
                }
                h1 { 
                  font-size: 24px; 
                  margin: 5px 0; 
                  font-weight: 800;
                }
                .mesa-badge {
                  background: ${config.primaryColor};
                  color: white;
                  font-weight: 800;
                  padding: 6px 18px;
                  border-radius: 12px;
                  display: inline-block;
                  margin: 15px 0;
                  font-size: 18px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                }
                .qr-img { 
                  width: 250px; 
                  height: 250px; 
                  margin: 20px 0;
                  border: 1px solid rgba(0,0,0,0.05);
                  padding: 10px;
                  border-radius: 16px;
                }
                p {
                  font-size: 14px;
                  color: #666666;
                  margin: 10px 0 0 0;
                  font-weight: 500;
                }
              </style>
            </head>
            <body>
              <div class="container">
                ${logoHtml}
                <h1>${config.name}</h1>
                <div class="mesa-badge">MESA ${this.tableNum()}</div>
                <br>
                <img class="qr-img" src="${this.qrCodeUrl()}" alt="QR Code" />
                <p>Escaneie para acessar o cardápio e fazer seu pedido</p>
              </div>
              <script>
                window.onload = function() { 
                  setTimeout(function() {
                    window.print(); 
                    window.close(); 
                  }, 500);
                }
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  }
}
