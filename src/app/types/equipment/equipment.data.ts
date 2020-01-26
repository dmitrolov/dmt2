import {Item} from './item/item.model';

export const EquipmentData: Item[] = [
  {
    value: 'greatAxe',
    title: {
      ru: 'Секира',
      en: 'Great Axe',
    },
    cost: 3000,
    weight: 7,
    rarity: 0,
    type: 'weapon',
    description: {
      ru: '1к12 рубящий Двуручное, тяжёлое',
      en: ''
    }
  },
  {
    value: 'handAxe',
    title: {
      ru: 'Ручной топор',
      en: 'Hand Axe',
    },
    cost: 500,
    weight: 2,
    rarity: 0,
    type: 'weapon',
    description: {
      en: '',
      ru: '1к6 рубящий, Лёгкое, метательное (дис. 20/60)'
    }

  },
  {
    value: 'explorersPack',
    title: {
      ru: 'Набор путешественника',
      en: 'Explorer\'s Pack'
    },
    rarity: 0,
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
    value: 'javelin',
    title: {
      ru: 'Метательное копьё',
      en: 'Javelin',
    },
    type: 'weapon',
    weight: 2,
    cost: 50,
    rarity: 0,
    description: {
      en: '',
      ru: '1к6 колющий, Метательное (дис. 30/120)'
    }
  },
];
