import { Product, MENU_PRODUCTS, MENU_CATEGORIES } from './menu-data';

export interface CompanyConfig {
  id: string;
  name: string;
  logo: string; // Emoji ou URL da logo
  bannerBg: string; 
  bannerTitle: string;
  bannerDescription: string;
  primaryColor: string;
  primaryColorHover: string;
  primaryColorRgb: string;
  accentColor: string;
  orderPrefix: string;
  categories: string[];
  products: Product[];
  showCallWaiter: boolean;
}

const LIONS_PRODUTOS_IMG = '/empresas/lions/produtos';
const LIONS_BANNER = '/empresas/lions/banners';

/** Retorna true quando logo é caminho de imagem (não emoji). */
export function isLogoImage(logo: string): boolean {
  return /^(\/|https?:\/\/)/.test(logo);
}

export const LIONS_PRODUCTS: Product[] = [
  {
    id: 'lions-cerveja-3-latas',
    name: 'Combo Cervejas (3 Latas)',
    category: 'Bebidas',
    description: 'Escolha 3 latas de cerveja gelada de sua preferência: Heineken, Amstel ou Skol. Retire diretamente no balcão.',
    price: 20.00,
    image: `${LIONS_PRODUTOS_IMG}/lions-beer-combo.png`,
    rating: 4.9,
    reviewsCount: 42,
    inclusions: [
      '3 Cervejas Lata 350ml geladas',
      'Opções: Heineken, Amstel ou Skol (escolha no balcão)'
    ]
  },
  {
    id: 'lions-refrigerante',
    name: 'Refrigerante Lata 350ml',
    category: 'Bebidas',
    description: 'Lata de Coca-Cola Sabor Original de 350ml gelada. Perfeito para acompanhar.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=300&auto=format&fit=crop',
    rating: 4.8,
    reviewsCount: 31,
    inclusions: ['Coca-Cola Lata 350ml gelada']
  },
  {
    id: 'lions-suco',
    name: 'Suco Del Valle 200ml',
    category: 'Bebidas',
    description: 'Caixinha de Suco Del Valle Uva (200ml) gelada, saboroso e refrescante para a família.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=300&auto=format&fit=crop',
    rating: 4.7,
    reviewsCount: 15,
    inclusions: ['Suco Del Valle Uva 200ml']
  },
  {
    id: 'lions-agua',
    name: 'Água Mineral Crystal 500ml',
    category: 'Bebidas',
    description: 'Garrafa de água mineral Crystal de 500ml. Disponível nas versões com gás e sem gás.',
    price: 5.00,
    prices: [
      { label: 'Sem Gás', value: 5.00 },
      { label: 'Com Gás', value: 5.00 }
    ],
    image: `${LIONS_PRODUTOS_IMG}/aguaMineralCristal.png`,
    rating: 4.9,
    reviewsCount: 56,
    inclusions: ['Garrafa de Água Crystal 500ml']
  },
  {
    id: 'lions-redbull',
    name: 'Energético Red Bull 250ml',
    category: 'Bebidas',
    description: 'Lata de Red Bull Energy Drink de 250ml gelada. Te dá asas para curtir o pedal!',
    price: 15.00,
    image: `${LIONS_PRODUTOS_IMG}/redbull.png`,
    rating: 4.8,
    reviewsCount: 22,
    inclusions: ['Lata de Red Bull Energy Drink 250ml']
  }
];

export const COMPANIES_CONFIG: Record<string, CompanyConfig> = {
  skinao: {
    id: 'skinao',
    name: 'Skinão Grill',
    logo: '🔥',
    bannerBg: '/banner_burger.png',
    bannerTitle: 'Sabor Incomparável em Cada Detalhe',
    bannerDescription: 'Experimente nossos blends exclusivos, ingredientes selecionados e molhos especiais. Peça direto da mesa e acompanhe tudo pelo celular de forma rápida e prática.',
    primaryColor: '#d93829',
    primaryColorHover: '#b82b1d',
    primaryColorRgb: '217, 56, 41',
    accentColor: '#ffcd00',
    orderPrefix: '5º Pedal Solidário - Lions Clube',
    categories: MENU_CATEGORIES,
    products: MENU_PRODUCTS,
    showCallWaiter: true
  },
  lions: {
    id: 'lions',
    name: '5º Pedal Lions Solidário',
    logo: `${LIONS_BANNER}/iconLions.png`,
    bannerBg: `${LIONS_BANNER}/banner.jpg`, 
    bannerTitle: 'Tabela de Preços - Bebidas',
    bannerDescription: '',
    primaryColor: '#002F6C',
    primaryColorHover: '#001D42',
    primaryColorRgb: '0, 47, 108',
    accentColor: '#FFCD00',
    orderPrefix: 'LIONS SOLIDÁRIO',
    categories: ['Bebidas'],
    products: LIONS_PRODUCTS,
    showCallWaiter: false
  }
};
