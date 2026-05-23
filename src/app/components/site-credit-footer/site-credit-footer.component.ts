import { Component } from '@angular/core';
import { ALPHA_ARTES, alphaArtesWhatsAppUrl } from '../../data/alpha-artes';

@Component({
  selector: 'app-site-credit-footer',
  imports: [],
  templateUrl: './site-credit-footer.component.html',
  styleUrl: './site-credit-footer.component.css',
})
export class SiteCreditFooterComponent {
  protected readonly credit = ALPHA_ARTES;
  protected readonly whatsappUrl = alphaArtesWhatsAppUrl();
}
