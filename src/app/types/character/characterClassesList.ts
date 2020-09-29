import { DomItem } from '../dom/Dom';
import { CharacterProficiency, CharacterEffects, CharacterEquipment, characterMock } from './Character';

export interface CharacterClass extends DomItem {
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
        value: 'greatAxe',
        count: 1
      },
      {
        value: 'handAxe',
        count: 2
      },
      {
        value: 'explorersPack',
        count: 1
      },
      {
        value: 'javelin',
        count: 4
      }
    ]
  }
];
