export interface Pizza {
  id: number
  name: string
  description: string
  price: number
  category: 'Traditionnelle' | 'Signature'
  vegetarian: boolean
  hasFish: boolean
  hasMeat: boolean
  hasEgg: boolean
  allergens: string[]
  image: string
}

export interface Dessert {
  id: number
  name: string
  description: string
  price: number
}

export interface Boisson {
  id: number
  name: string
  description: string
  price: number
  category: 'SODAS' | 'BIERES' | 'VINS'
}

export const pizzas: Pizza[] = [
  // ── Traditionnelles ──────────────────────────────────────────────────
  {
    id: 1,
    name: 'La Marguerite',
    description: 'Tomate, mozzarella, basilic frais',
    price: 10.00,
    category: 'Traditionnelle',
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
  },
  {
    id: 2,
    name: 'La Regina',
    description: 'Tomate, mozzarella, jambon, champignons',
    price: 13.00,
    category: 'Traditionnelle',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
  {
    id: 3,
    name: 'La Napo',
    description: 'Tomate, mozzarella, anchois, câpres, olives',
    price: 14.00,
    category: 'Traditionnelle',
    vegetarian: false,
    hasFish: true,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait', 'Poisson'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
  },
  {
    id: 4,
    name: 'La Caprese',
    description: 'Tomate, mozzarella di bufala, tomates cerises, roquette',
    price: 14.00,
    category: 'Traditionnelle',
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80',
  },
  {
    id: 5,
    name: 'La 4 Saisons',
    description: 'Tomate, mozzarella, jambon, champignons, artichauts, olives',
    price: 14.00,
    category: 'Traditionnelle',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80',
  },
  {
    id: 6,
    name: 'La Chèvre Miel',
    description: 'Crème fraîche, mozzarella, fromage de chèvre, miel',
    price: 14.00,
    category: 'Traditionnelle',
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80',
  },
  {
    id: 7,
    name: 'La Calabrese',
    description: 'Tomate, mozzarella, salami piquant, poivrons, oignons',
    price: 15.00,
    category: 'Traditionnelle',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
  },
  {
    id: 8,
    name: 'La Calzone',
    description: 'Pizza fermée : tomate, mozzarella, jambon, champignons, œuf',
    price: 14.00,
    category: 'Traditionnelle',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: true,
    allergens: ['Gluten', 'Lait', 'Œufs'],
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?w=800&q=80',
  },
  {
    id: 9,
    name: 'La 4 Fromages',
    description: 'Crème fraîche, mozzarella, gorgonzola, chèvre, parmesan',
    price: 14.00,
    category: 'Traditionnelle',
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80',
  },
  {
    id: 10,
    name: 'La Merguez',
    description: 'Tomate, mozzarella, merguez du boucher, poivrons, oignons',
    price: 14.00,
    category: 'Traditionnelle',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80',
  },
  {
    id: 11,
    name: 'La Cannibale',
    description: 'Tomate, mozzarella, viande hachée Angus, chorizo, lardons, œuf',
    price: 15.00,
    category: 'Traditionnelle',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: true,
    allergens: ['Gluten', 'Lait', 'Œufs'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
  },
  // ── Signatures ───────────────────────────────────────────────────────
  {
    id: 12,
    name: 'La Lily-Rose',
    description: 'Crème fraîche, mozzarella, saumon fumé, citron, aneth',
    price: 15.00,
    category: 'Signature',
    vegetarian: false,
    hasFish: true,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait', 'Poisson'],
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80',
  },
  {
    id: 13,
    name: "La Emmy-Lou",
    description: 'Tomate, mozzarella, jambon cru, roquette, copeaux de parmesan',
    price: 15.00,
    category: 'Signature',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
  },
  {
    id: 14,
    name: 'La Chris',
    description: 'Crème fraîche, mozzarella, poulet mariné, champignons, curry',
    price: 15.00,
    category: 'Signature',
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80',
  },
  {
    id: 15,
    name: 'La Ludmilove',
    description: 'Tomate, mozzarella, légumes grillés, pesto maison',
    price: 15.00,
    category: 'Signature',
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait', 'Fruits à coque'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
  {
    id: 16,
    name: 'La Truffe',
    description: 'Crème fraîche, mozzarella, champignons, huile de truffe',
    price: 20.00,
    category: 'Signature',
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ['Gluten', 'Lait'],
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80',
  },
]

export const desserts: Dessert[] = [
  {
    id: 1,
    name: 'La Nutella',
    description: 'Pizza sucrée garnie de Nutella, servie chaude. Un dessert gourmand incontournable.',
    price: 7.00,
  },
]

export const boissons: Boisson[] = [
  // Sodas
  { id: 1, name: 'Coca-Cola', description: '33cl', price: 3.00, category: 'SODAS' },
  { id: 2, name: 'Coca-Cola Zéro', description: '33cl', price: 3.00, category: 'SODAS' },
  { id: 3, name: 'Orangina', description: '33cl', price: 3.00, category: 'SODAS' },
  { id: 4, name: 'Ice Tea Pêche', description: '33cl', price: 3.00, category: 'SODAS' },
  // Bières
  { id: 5, name: 'Heineken', description: '33cl — Bière blonde hollandaise', price: 4.00, category: 'BIERES' },
  // Vins
  { id: 6, name: 'Marrenon, Les Grains, Pinot noir', description: 'IGP Méditerranée — Rouge', price: 17.00, category: 'VINS' },
  { id: 7, name: 'Sun Up, Les Grains, Pinot noir', description: 'IGP Méditerranée — Rosé', price: 17.00, category: 'VINS' },
]
