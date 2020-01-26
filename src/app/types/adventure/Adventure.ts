import { Character } from '../character/Character';

export interface Adventure {
  name: string;
  description: string;
  charactersList: Character[];
  notes: string[];
}
