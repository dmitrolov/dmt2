import { Multilanguage } from "../general";

// Категории размеров
interface CreatureSizes {
    value: string;
    title: Multilanguage;
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

export interface Damage {
    type: string;
    count: number;
    dice: number;
    range: number;
}

interface GameLanguages {
    value: string;
    title: Multilanguage;
}

export const gameLanguages = [
    {
        value: 'common',
        title: {
            eng: 'Common',
            ru: 'Общий',
        }
    },
    {
        value: 'gnomish',
        title: {
            eng: 'Gnomish',
            ru: 'Гномий',
        }
    },
];
