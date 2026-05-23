/** Créditos Alpha Artes — exibido no rodapé de cardápios em modo vitrine. */
const LOGOS = '/empresas/lions/logos';

export const ALPHA_ARTES = {
  name: 'Alpha Artes',
  logo: `${LOGOS}/logoAlphaArtes.png`,
  instagramIcon: `${LOGOS}/instagram.png`,
  whatsappIcon: `${LOGOS}/whatsapp.png`,
  instagramUrl: 'https://www.instagram.com/alpha_artes/',
  instagramHandle: '@alpha_artes',
  whatsappNumber: '5534998964543',
  whatsappDisplay: '(34) 99989-64543',
} as const;

export function alphaArtesWhatsAppUrl(): string {
  return `https://wa.me/${ALPHA_ARTES.whatsappNumber}`;
}
