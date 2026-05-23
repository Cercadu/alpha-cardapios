import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CompanyConfig, COMPANIES_CONFIG } from '../data/company-data';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private platformId = inject(PLATFORM_ID);

  // Sinais públicos reativos
  activeCompany = signal<CompanyConfig>(COMPANIES_CONFIG['skinao']);
  tableNumber = signal<string>('12');

  constructor() {
    this.initializeFromUrlAndStorage();
  }

  /**
   * Inicializa a empresa ativa e mesa a partir da URL e localStorage (SSR-safe)
   */
  initializeFromUrlAndStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const params = new URLSearchParams(window.location.search);
      const urlEmpresa = params.get('empresa');
      const urlMesa = params.get('mesa');

      // 1. Determina a mesa
      if (urlMesa) {
        this.tableNumber.set(urlMesa);
      } else {
        this.tableNumber.set('12'); // Mesa padrão
      }

      // 2. Determina a empresa
      let selectedEmpresaId = 'skinao';

      if (urlEmpresa && COMPANIES_CONFIG[urlEmpresa.toLowerCase()]) {
        selectedEmpresaId = urlEmpresa.toLowerCase();
      } else {
        // Fallback para localStorage
        const savedEmpresa = localStorage.getItem('company_default');
        if (savedEmpresa && COMPANIES_CONFIG[savedEmpresa]) {
          selectedEmpresaId = savedEmpresa;
        }
      }

      this.selectCompany(selectedEmpresaId);
    }
  }

  /**
   * Altera a empresa ativa e aplica seu tema dinamicamente
   */
  selectCompany(companyId: string): void {
    const config = COMPANIES_CONFIG[companyId];
    if (config) {
      this.activeCompany.set(config);
      this.applyTheme(config);
    }
  }

  /**
   * Salva a empresa ativa padrão em localStorage (para acessos sem query params)
   */
  setDefaultCompany(companyId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      if (COMPANIES_CONFIG[companyId]) {
        localStorage.setItem('company_default', companyId);
      }
    }
  }

  /**
   * Altera a mesa ativa manualmente (por exemplo, na configuração)
   */
  setTableNumber(table: string): void {
    this.tableNumber.set(table);
  }

  /**
   * Aplica as variáveis de estilo CSS na raiz do documento
   */
  private applyTheme(company: CompanyConfig): void {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', company.primaryColor);
      root.style.setProperty('--primary-color-hover', company.primaryColorHover);
      root.style.setProperty('--primary-color-rgb', company.primaryColorRgb);
      root.style.setProperty('--primary-color-light', `rgba(${company.primaryColorRgb}, 0.12)`);
      root.style.setProperty('--primary-color-border', `rgba(${company.primaryColorRgb}, 0.3)`);
      root.style.setProperty('--accent-color', company.accentColor);
    }
  }
}
