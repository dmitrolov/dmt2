import { CharacterAbout } from './about/character.about.model';
import { CharacterEquipment } from './equipment/character.equipment.model';

export interface Character {
  about: CharacterAbout;
  abilities: string[];
  equipment: CharacterEquipment[];
}
