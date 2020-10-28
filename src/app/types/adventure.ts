import { Character } from "./adventure/character";
import { Item } from "./items";

export interface Adventure {
  name: string;
  description: string;
  image: string;
  playersList: string[]; // Array of user email
  dungeonMaster: string;
  charactersList: Character[];
  itemsList: Item[];
  notes: string[];
  customCounter: number;
}
