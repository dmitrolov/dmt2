import { DomItem } from '../dom/Dom';
import { CharacterStats, CharacterEffects, CharacterAttributes, CharacterProficiency } from './Character';

export interface CharacterRace extends DomItem {
  stats: CharacterStats;
  effects: CharacterEffects;
  attributes: CharacterAttributes;
  proficiency: CharacterProficiency;
  abilities: string[];
  subRaces?: CharacterRace[];
}

