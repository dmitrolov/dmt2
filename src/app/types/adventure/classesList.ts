import { Multilanguage } from '../general';
import { CharacterProficiency, CharacterEffects, CharacterEquipment, characterMock } from './character';

export interface CharacterClass {
  value: string;
  title: Multilanguage;
  proficiency: CharacterProficiency;
  effects: CharacterEffects;
  equipment: CharacterEquipment[];
}

export const CharacterClassesList: CharacterClass[] = [
  {
    value: 'barbarian',
    title: {
      en: 'Barbarian',
      ru: 'Варвар'
    },
    proficiency: {
      armor: ['light', 'medium', 'shields'],
      weapons: ['martial', 'simple'],
      tools: [],
      languages: [],
      skills: characterMock.about.proficiency.skills
    },
    effects: {
      savingThrows: ['strength', 'constitution'],
      resistance: [],
      immunity: []
    },
    equipment: [
      {
        id: 'greatAxe',
        count: 1,
        isEquiped: false,
        isStored: false
      },
      {
        id: 'handAxe',
        count: 2,
        isEquiped: false,
        isStored: false
      },
      {
        id: 'explorersPack',
        count: 1,
        isEquiped: false,
        isStored: false
      },
      {
        id: 'javelin',
        count: 4,
        isEquiped: false,
        isStored: false
      }
    ]
  }
];
