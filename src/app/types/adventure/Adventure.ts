import { Character } from "./character";

export interface Adventure {
  name: string;
  description: string;
  image: string;
  playersList: string[]; // Array of user email
  dungeonMaster: string;
  charactersList: Character[];
  notes: string[];
}
