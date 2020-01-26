import { DomItem } from '../../dom/Dom';
import { CharacterEquipment } from '../equipment/character.equipment.model';
import { CharacterEffects } from './components/character.effects.model';
import { CharacterProficiency } from './components/character.proficiency.model';

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
      skills: ['Choose two from Anim al Handling, Athletics, Intimidation, Nature, Perception, and Survival']
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
