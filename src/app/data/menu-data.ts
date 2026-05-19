export interface PriceOption {
  label: string;
  value: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
  price: number;
  prices?: PriceOption[];
  image: string;
  rating?: number;
  reviewsCount?: number;
  inclusions?: string[];
}

export const MENU_CATEGORIES = [
  'Espetão à Moda',
  'Espetinhos',
  'Porções',
  'Monte sua Salada'
];

export const MENU_PRODUCTS: Product[] = [
  // ================= CATEGORY: ESPETÃO À MODA =================
  {
    id: 'esp-picanha',
    name: 'Picanha - Espetão à Moda',
    category: 'Espetão à Moda',
    description: 'Acompanha Arroz, Feijão Tropeiro, Vinagrete e Mandioca. Escolha o tamanho ideal para sua mesa.',
    price: 150.00,
    prices: [
      { label: '3 Pessoas', value: 150.00 },
      { label: '4 Pessoas', value: 160.00 },
      { label: '5 Pessoas', value: 170.00 }
    ],
    image: '/espetao.png',
    rating: 4.9,
    reviewsCount: 112,
    inclusions: [
      'Picanha Nobre fatiada e grelhada na brasa',
      'Arroz Branco soltinho',
      'Feijão Tropeiro mineiro tradicional',
      'Vinagrete fresco da casa',
      'Mandioca cozida macia'
    ]
  },
  {
    id: 'esp-cupim',
    name: 'Cupim - Espetão à Moda',
    category: 'Espetão à Moda',
    description: 'Cupim extremamente suculento e macio. Acompanha Arroz, Feijão Tropeiro, Vinagrete e Mandioca.',
    price: 150.00,
    prices: [
      { label: '3 Pessoas', value: 150.00 },
      { label: '4 Pessoas', value: 160.00 },
      { label: '5 Pessoas', value: 170.00 }
    ],
    image: '/espetao.png',
    rating: 4.8,
    reviewsCount: 89,
    inclusions: [
      'Cupim premium assado lentamente na brasa',
      'Arroz Branco soltinho',
      'Feijão Tropeiro mineiro tradicional',
      'Vinagrete fresco da casa',
      'Mandioca cozida macia'
    ]
  },
  {
    id: 'esp-fraldinha',
    name: 'Fraldinha - Espetão à Moda',
    category: 'Espetão à Moda',
    description: 'Fraldinha no ponto certo de suculência. Acompanha Arroz, Feijão Tropeiro, Vinagrete e Mandioca.',
    price: 150.00,
    prices: [
      { label: '3 Pessoas', value: 150.00 },
      { label: '4 Pessoas', value: 160.00 },
      { label: '5 Pessoas', value: 170.00 }
    ],
    image: '/espetao.png',
    rating: 4.8,
    reviewsCount: 64,
    inclusions: [
      'Fraldinha selecionada grelhada com sal grosso',
      'Arroz Branco soltinho',
      'Feijão Tropeiro mineiro tradicional',
      'Vinagrete fresco da casa',
      'Mandioca cozida macia'
    ]
  },
  {
    id: 'esp-lombo',
    name: 'Lombo - Espetão à Moda',
    category: 'Espetão à Moda',
    description: 'Lombo suíno grelhado com tempero da casa. Acompanha Arroz, Feijão Tropeiro, Vinagrete e Mandioca.',
    price: 140.00,
    prices: [
      { label: '3 Pessoas', value: 140.00 },
      { label: '4 Pessoas', value: 150.00 },
      { label: '5 Pessoas', value: 160.00 }
    ],
    image: '/espetao.png',
    rating: 4.7,
    reviewsCount: 43,
    inclusions: [
      'Lombo suíno temperado na brasa',
      'Arroz Branco soltinho',
      'Feijão Tropeiro mineiro tradicional',
      'Vinagrete fresco da casa',
      'Mandioca cozida macia'
    ]
  },
  {
    id: 'esp-contra-file',
    name: 'Contra Filé - Espetão à Moda',
    category: 'Espetão à Moda',
    description: 'Contra filé bovino grelhado na brasa. Acompanha Arroz, Feijão Tropeiro, Vinagrete e Mandioca.',
    price: 150.00,
    prices: [
      { label: '3 Pessoas', value: 150.00 },
      { label: '4 Pessoas', value: 160.00 },
      { label: '5 Pessoas', value: 170.00 }
    ],
    image: '/espetao.png',
    rating: 4.8,
    reviewsCount: 75,
    inclusions: [
      'Contra Filé nobre grelhado no ponto desejado',
      'Arroz Branco soltinho',
      'Feijão Tropeiro mineiro tradicional',
      'Vinagrete fresco da casa',
      'Mandioca cozida macia'
    ]
  },

  // ================= CATEGORY: ESPETINHOS =================
  {
    id: 'espet-almondega-bacon',
    name: 'Almôndega c/ Bacon',
    category: 'Espetinhos',
    description: 'Almôndegas artesanais temperadas envoltas em fatias de bacon crocante.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.7,
    reviewsCount: 34,
    inclusions: [
      'Espeto de Almôndegas com Bacon grelhados',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-carne-serenata',
    name: 'Carne Serenata',
    category: 'Espetinhos',
    description: 'Espetinho clássico de carne serenata, macia e saborosa.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.6,
    reviewsCount: 22,
    inclusions: [
      'Espeto de Carne Serenata na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-picanha',
    name: 'Picanha Nobre',
    category: 'Espetinhos',
    description: 'Espeto feito com cortes selecionados de picanha nobre.',
    price: 28.00,
    prices: [
      { label: 'Simples', value: 28.00 },
      { label: 'Completo', value: 38.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.9,
    reviewsCount: 142,
    inclusions: [
      'Espeto de Picanha premium grelhado na hora',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-kafta',
    name: 'Kafta (Bovina ou Frango)',
    category: 'Espetinhos',
    description: 'Espeto de kafta artesanal muito bem temperada com ervas finas.',
    price: 22.00,
    prices: [
      { label: 'Simples', value: 22.00 },
      { label: 'Completo', value: 32.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.7,
    reviewsCount: 51,
    inclusions: [
      'Kafta artesanal temperada na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-tulipa',
    name: 'Tulipa de Frango',
    category: 'Espetinhos',
    description: 'Meio da asa de frango (tulipa) bem dourada e suculenta na brasa.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 73,
    inclusions: [
      'Tulipas de frango douradas e crocantes na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-cupim',
    name: 'Cupim na Brasa',
    category: 'Espetinhos',
    description: 'Pedaços de cupim macio grelhados no ponto exato.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.7,
    reviewsCount: 44,
    inclusions: [
      'Espeto de Cupim macio grelhado',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-file-mignon',
    name: 'Filé Mignon',
    category: 'Espetinhos',
    description: 'Cortes nobres de filé mignon grelhados com perfeição.',
    price: 20.00,
    prices: [
      { label: 'Simples', value: 20.00 },
      { label: 'Completo', value: 30.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 68,
    inclusions: [
      'Espeto de Filé Mignon premium na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-file-frango',
    name: 'Filé de Frango',
    category: 'Espetinhos',
    description: 'Peito de frango em cubos suculentos grelhados.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.6,
    reviewsCount: 39,
    inclusions: [
      'Espeto de Peito de Frango grelhado',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-coracao',
    name: 'Coração de Frango',
    category: 'Espetinhos',
    description: 'Corações de frango marinados no tempero especial da casa.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 91,
    inclusions: [
      'Espeto de Corações de frango bem temperados',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-contra-bacon',
    name: 'Contra Filé com Bacon',
    category: 'Espetinhos',
    description: 'Medalhão de contra filé envolvido em bacon dourado e crocante.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 57,
    inclusions: [
      'Medalhões de Contra Filé e Bacon na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-contra-sem-bacon',
    name: 'Contra Filé sem Bacon',
    category: 'Espetinhos',
    description: 'Espetinho puro de contra filé cortado em cubos grelhados na brasa.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.7,
    reviewsCount: 48,
    inclusions: [
      'Espeto de Contra Filé puro grelhado',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-linguica',
    name: 'Linguiça (Queijo Coalho ou Apimentada)',
    category: 'Espetinhos',
    description: 'Escolha entre linguiça recheada com queijo coalho ou a versão apimentada artesanal.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 62,
    inclusions: [
      'Linguiça artesanal (recheada de coalho ou apimentada) grelhada',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-frango-bacon',
    name: 'Frango c/ Bacon',
    category: 'Espetinhos',
    description: 'Medalhões de peito de frango macios e suculentos envoltos em bacon.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.7,
    reviewsCount: 46,
    inclusions: [
      'Medalhões de frango e bacon assados na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-provolone',
    name: 'Provolone Grelhado',
    category: 'Espetinhos',
    description: 'Espeto de queijo provolone levemente derretido com casca dourada.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 94,
    inclusions: [
      'Espeto de Provolone premium dourado na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-provolone-mel',
    name: 'Provolone c/ Mel/Melado',
    category: 'Espetinhos',
    description: 'Provolone na brasa finalizado com fio de mel ou melado de cana.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.9,
    reviewsCount: 108,
    inclusions: [
      'Espeto de Provolone grelhado',
      'Mel de abelha silvestre ou melado de cana por cima',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-queijo-coalho',
    name: 'Queijo Coalho',
    category: 'Espetinhos',
    description: 'Espeto de queijo coalho tostado por fora e incrivelmente macio por dentro.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 119,
    inclusions: [
      'Espeto de Queijo Coalho tostado por fora',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-queijo-coalho-mel',
    name: 'Queijo Coalho c/ Mel/Melado',
    category: 'Espetinhos',
    description: 'Queijo coalho assado na brasa servido com mel silvestre ou melado de cana.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.9,
    reviewsCount: 138,
    inclusions: [
      'Espeto de Queijo Coalho na brasa',
      'Mel de abelha silvestre ou melado de cana por cima',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-lombo',
    name: 'Lombo Suíno',
    category: 'Espetinhos',
    description: 'Cubos de lombo de porco magro e temperado grelhados.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.6,
    reviewsCount: 29,
    inclusions: [
      'Espeto de Lombo Suíno grelhado',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-costelinha-porco',
    name: 'Costelinha de Porco',
    category: 'Espetinhos',
    description: 'Costelinha suína temperada, macia e muito saborosa na brasa.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 52,
    inclusions: [
      'Costelinhas de Porco temperadas na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-costela-bovina',
    name: 'Costela Bovina',
    category: 'Espetinhos',
    description: 'Espeto de costela desfiando, assada lentamente com gordura na medida.',
    price: 22.00,
    prices: [
      { label: 'Simples', value: 22.00 },
      { label: 'Completo', value: 32.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 81,
    inclusions: [
      'Espeto de Costela Bovina suculenta',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-pao-alho',
    name: 'Pão de Alho Temperado',
    category: 'Espetinhos',
    description: 'Pão francês recheado com creme de alho da casa gratinado.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.8,
    reviewsCount: 124,
    inclusions: [
      'Pão de alho gigante recheado e dourado na brasa',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },
  {
    id: 'espet-romeu-julieta',
    name: 'Romeu e Julieta na Brasa',
    category: 'Espetinhos',
    description: 'A união perfeita de queijo coalho grelhado, goiabada cremosa e fatias de bacon.',
    price: 17.00,
    prices: [
      { label: 'Simples', value: 17.00 },
      { label: 'Completo', value: 27.00 }
    ],
    image: '/espetinhos.png',
    rating: 4.9,
    reviewsCount: 88,
    inclusions: [
      'Queijo coalho fatiado na brasa',
      'Goiabada cremosa e fatias de bacon grelhadas',
      'Opção Completa: Acompanha Arroz, Feijão Tropeiro, Caldo, Vinagrete e Mandioca'
    ]
  },

  // ================= CATEGORY: PORÇÕES =================
  {
    id: 'porc-guariroba',
    name: 'Guariroba Especial',
    category: 'Porções',
    description: 'Deliciosa guariroba típica bem temperada, ideal para petiscar.',
    price: 25.00,
    prices: [
      { label: 'Pequena (200g)', value: 25.00 },
      { label: 'Grande (300g)', value: 29.99 }
    ],
    image: '/porcoes.png',
    rating: 4.7,
    reviewsCount: 31,
    inclusions: [
      'Porção de Guariroba cortada',
      'Tempero especial do Skinão Grill'
    ]
  },
  {
    id: 'porc-lambari',
    name: 'Lambari Frito (500g)',
    category: 'Porções',
    description: 'Meio quilo de lambari fresquinho, empanado e frito até ficar super sequinho e crocante.',
    price: 55.00,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 96,
    inclusions: [
      '500g de Lambari frito crocante',
      'Fatias de Limão fresco'
    ]
  },
  {
    id: 'porc-tambaqui',
    name: 'Tambaqui Frito c/ Cebolas Empanadas',
    category: 'Porções',
    description: 'Filé de tambaqui frito e crocante, servido com rodelas douradas de cebola empanada.',
    price: 69.99,
    image: '/porcoes.png',
    rating: 4.9,
    reviewsCount: 78,
    inclusions: [
      'Costelas de Tambaqui fritas',
      'Anéis de Cebola empanados e dourados',
      'Molho tártaro caseiro'
    ]
  },
  {
    id: 'porc-torresmo',
    name: 'Torresmo com Mandioca (750g)',
    category: 'Porções',
    description: 'Porção gigante de torresmo de rolo crocante e pururucado acompanhado de mandioca cozida macia.',
    price: 58.00,
    image: '/porcoes.png',
    rating: 4.9,
    reviewsCount: 186,
    inclusions: [
      '750g de Torresmo de Rolo com pururuca perfeita',
      'Mandioca cozida na manteiga de garrafa',
      'Limão Taiti fresco fatiado'
    ]
  },
  {
    id: 'porc-panceta',
    name: 'Panceta com Mandioca',
    category: 'Porções',
    description: 'Barriga de porco (panceta) frita na hora com casca crocante e carne suculenta acompanhada de mandioca.',
    price: 52.00,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 121,
    inclusions: [
      'Panceta artesanal de porco frita',
      'Mandioca cozida e macia de acompanhamento',
      'Limão fresco'
    ]
  },
  {
    id: 'porc-tabua-frios',
    name: 'Tábua de Frios Completa',
    category: 'Porções',
    description: 'Seleção premium de presunto, queijo, salaminho, azeitonas, palmito, ovos de codorna, alface e tomate.',
    price: 95.00,
    image: '/porcoes.png',
    rating: 4.7,
    reviewsCount: 38,
    inclusions: [
      'Queijo Muçarela em cubos',
      'Presunto fatiado enrolado',
      'Salaminho italiano defumado',
      'Ovos de Codorna e Azeitonas verdes',
      'Palmito inteiro em conserva fatiado',
      'Salada de alface e tomate de decoração'
    ]
  },
  {
    id: 'porc-moela-cebola',
    name: 'Moela ao Molho de Cebola (600g)',
    category: 'Porções',
    description: 'Moela de frango cozida lentamente em molho caseiro encorpado e acebolado.',
    price: 58.00,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 67,
    inclusions: [
      '600g de Moela cozida desfiando',
      'Molho encorpado de tomate e cebolas salteadas',
      'Fatias de pão de acompanhamento'
    ]
  },
  {
    id: 'porc-coracao-moela',
    name: 'Coração c/ Moela ao Molho de Cebola (600g)',
    category: 'Porções',
    description: 'Combinação clássica de corações de frango e moela ensopados em molho rico acebolado.',
    price: 58.00,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 59,
    inclusions: [
      'Coração de frango e Moela cozidos juntos',
      'Molho rico de cebolas caramelizadas e especiarias',
      'Cesta de pães frescos'
    ]
  },
  {
    id: 'porc-coracao-acebolado',
    name: 'Coração Acebolado (600g)',
    category: 'Porções',
    description: 'Corações de frango salteados com bastante cebola fatiada na chapa quente.',
    price: 58.00,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 83,
    inclusions: [
      '600g de Corações de frango na chapa',
      'Cebolas fritas caramelizadas',
      'Cheiro verde fresco por cima'
    ]
  },
  {
    id: 'porc-mandioca-frita',
    name: 'Mandioca Frita Especial',
    category: 'Porções',
    description: 'Mandioca cozida e frita na hora, super crocante por fora e macia por dentro.',
    price: 28.00,
    image: '/porcoes.png',
    rating: 4.7,
    reviewsCount: 71,
    inclusions: [
      'Porção de mandioca frita bem dourada',
      'Salpicado de queijo parmesão e orégano'
    ]
  },
  {
    id: 'porc-isca-frango',
    name: 'Isca de Frango Empanado (700g)',
    category: 'Porções',
    description: 'Tiras generosas de peito de frango empanadas em farinha especial crocante e fritas.',
    price: 58.00,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 114,
    inclusions: [
      '700g de Iscas de frango suculentas',
      'Empanamento crocante especial',
      'Molho Honey Mustard (mostarda e mel)'
    ]
  },
  {
    id: 'porc-isca-contra',
    name: 'Isca de Contra Filé Acebolado c/ Mandioca (650g)',
    category: 'Porções',
    description: 'Tiras suculentas de contra filé bovino aceboladas servidas com mandioca frita ou cozida.',
    price: 75.00,
    image: '/porcoes.png',
    rating: 4.9,
    reviewsCount: 133,
    inclusions: [
      '650g de Contra Filé em tiras na chapa',
      'Bastante cebola frita fatiada',
      'Mandioca cozida ou frita de acompanhamento'
    ]
  },
  {
    id: 'porc-ceviche',
    name: 'Ceviche de Tilápia',
    category: 'Porções',
    description: 'Tilápia fresca em cubos marinados no limão, cebola roxa, coentro e pimenta dedo-de-moça.',
    price: 39.99,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 54,
    inclusions: [
      'Cubos de Tilápia fresca crua',
      'Cebola Roxa fatiada e Coentro fresco',
      'Leche de Tigre cítrico à base de limão puro',
      'Batata doce de acompanhamento'
    ]
  },
  {
    id: 'porc-cebola-empanada',
    name: 'Cebola Empanada da Casa',
    category: 'Porções',
    description: 'Anéis gigantes de cebola empanados e fritos, sequinhos e crocantes.',
    price: 29.99,
    image: '/porcoes.png',
    rating: 4.7,
    reviewsCount: 65,
    inclusions: [
      'Anéis de Cebola gigantes',
      'Empanamento crocante sequinho',
      'Molho Rose da casa'
    ]
  },
  {
    id: 'porc-salada-palmito',
    name: 'Salada de Palmito',
    category: 'Porções',
    description: 'Palmitos inteiros de alta qualidade cortados e servidos como uma refrescante porção.',
    price: 45.00,
    image: '/porcoes.png',
    rating: 4.8,
    reviewsCount: 42,
    inclusions: [
      'Palmitos inteiros em conserva fatiados',
      'Azeite de oliva e orégano'
    ]
  },
  {
    id: 'porc-salada-ovo-codorna',
    name: 'Salada de Ovo de Codorna',
    category: 'Porções',
    description: 'Porção de ovos de codorna cozidos e descascados, servidos frios com azeite e orégano.',
    price: 45.00,
    image: '/porcoes.png',
    rating: 4.7,
    reviewsCount: 33,
    inclusions: [
      'Ovos de Codorna inteiros cozidos',
      'Tempero de azeite extra virgem e orégano'
    ]
  },
  {
    id: 'porc-salada-jilo',
    name: 'Salada de Jiló Cru',
    category: 'Porções',
    description: 'Jiló fatiado bem fininho e marinado no limão e azeite, perfeito tira-gosto tradicional.',
    price: 28.00,
    image: '/porcoes.png',
    rating: 4.6,
    reviewsCount: 51,
    inclusions: [
      'Jiló cru fatiado ultra fino na faca',
      'Molho cítrico de limão taiti, sal e azeite extra virgem'
    ]
  },
  {
    id: 'porc-tomate',
    name: 'Porção de Tomate Fatiado',
    category: 'Porções',
    description: 'Tomates vermelhos frescos fatiados e temperados com azeite de oliva e orégano.',
    price: 22.00,
    image: '/porcoes.png',
    rating: 4.5,
    reviewsCount: 19,
    inclusions: [
      'Tomates frescos selecionados fatiados',
      'Sal, azeite extra virgem e salpicado de orégano'
    ]
  },

  // ================= CATEGORY: MONTE SUA SALADA =================
  {
    id: 'sal-pequena',
    name: 'Monte sua Salada - Pequena (5 Ingredientes)',
    category: 'Monte sua Salada',
    description: 'Monte sua salada perfeita! Escolha 5 ingredientes frescos e seu molho artesanal favorito (Italiano, Rosé, Parcesão ou Mostarda e Mel).',
    price: 35.00,
    image: '/salada.png',
    rating: 4.8,
    reviewsCount: 47,
    inclusions: [
      'Escolha 5 ingredientes frescos',
      'Escolha 1 molho artesanal premium',
      'Adicional de Palmito opcional'
    ]
  },
  {
    id: 'sal-media',
    name: 'Monte sua Salada - Média (8 Ingredientes)',
    category: 'Monte sua Salada',
    description: 'Escolha 8 ingredientes frescos e o molho de sua preferência. Uma refeição leve, nutritiva e totalmente personalizada para você!',
    price: 39.99,
    image: '/salada.png',
    rating: 4.9,
    reviewsCount: 68,
    inclusions: [
      'Escolha 8 ingredientes frescos',
      'Escolha 1 molho artesanal premium',
      'Adicional de Palmito opcional'
    ]
  }
];
