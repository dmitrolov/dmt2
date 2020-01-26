// Категории размеров
import { DomItem } from '../dom/Dom';

interface CreatureSizes extends DomItem {
  area: number;
}
export const creatureSize: CreatureSizes[] = [
  {
    value: 'tiny',
    title: {
      en: 'Tiny',
      ru: 'Крошечный'
    },
    area: 2.5 // 2,5 × 2,5 фута или меньше
  },
  {
    value: 'small',
    title: {
      en: 'Small',
      ru: 'Маленький',
    },
    area: 5,
  },
  {
    value: 'medium',
    title: {
      en: 'Medium',
      ru: 'Средний',
    },
    area: 5,
  },
  {
    value: 'large',
    title: {
      en: 'Large',
      ru: 'Большой',
    },
    area: 10,
  },
  {
    value: 'huge',
    title: {
      en: 'Huge',
      ru: 'Огромный',
    },
    area: 15,
  },
  {
    value: 'gargantuan',
    title: {
      en: 'Gargantuan',
      ru: 'Громадный',
    },
    area: 20, // 20 × 20 футов или больше
  },
];
