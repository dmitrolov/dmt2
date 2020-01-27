import { Character } from '../character/Character';

export interface Adventure {
  name: string;
  description: string;
  image: string;
  playersList: string[]; // Array of user email
  dungeonMaster: string;
  charactersList: Character[];
  notes: string[];
}
