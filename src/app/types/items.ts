import { Multilanguage } from "./general";
import { Damage } from "./adventure/mechanics";

type ItemType = 'weapon' | 'itemsPack';
type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'

export interface Item {
  id: string;
  name: Multilanguage;
  type: ItemType;
  weight: number;               // Вес предмета в фунтах
  cost: number;                 // Стоимость предмета в самых дешевых монетах (прим. медные)
  rarity: ItemRarity;           // Редкость предмета
  description: Multilanguage;   // Описание предмета
  count?: number; // TODO: remove after personal inventory implementation
}

export interface Weapon extends Item {
  attack: {
    melee: Damage;
    range: Damage;
  };
}

export type ItemList = Record<string, Item>

export const items: Item[] = [
  {
    id: 'greatAxe',
    name: {
      ru: 'Секира',
      en: 'Great Axe',
    },
    cost: 3000,
    weight: 7,
    rarity: 'common',
    type: 'weapon',
    description: {
      ru: '1к12 рубящий Двуручное, тяжёлое',
      en: ''
    }
  },
  {
    id: 'handAxe',
    name: {
      ru: 'Ручной топор',
      en: 'Hand Axe',
    },
    cost: 500,
    weight: 2,
    rarity: 'common',
    type: 'weapon',
    description: {
      en: '',
      ru: '1к6 рубящий, Лёгкое, метательное (дис. 20/60)'
    }

  },
  {
    id: 'explorersPack',
    name: {
      ru: 'Набор путешественника',
      en: 'Explorer\'s Pack'
    },
    rarity: 'common',
    cost: 1000,
    weight: 5,
    type: 'itemsPack',
    description: {
      en: '',
      ru: 'Набор путешественника (10 зм). Включает рюкзак, спаль' +
        'ник, столовый набор, трутницу, 10 факелов, рационы на 10' +
        'дней и бурдюк. В набор также входит 50-футовая пеньковая ' +
        'верёвка, закреплённая сбоку.'
    }
  },
  {
    id: 'javelin',
    name: {
      ru: 'Метательное копьё',
      en: 'Javelin',
    },
    type: 'weapon',
    weight: 2,
    cost: 50,
    rarity: 'common',
    description: {
      en: '',
      ru: '1к6 колющий, Метательное (дис. 30/120)'
    }
  },
];