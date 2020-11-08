import { Character } from "./adventure/character";
import { Item } from "./items";

interface AdventurePlayersList {
  email: string;
  isDungeonMaster: boolean;
}

export interface Adventure {
  id: string;
  name: string;
  customCounter: number;
  image?: string;
  description?: string;
  playersList: AdventurePlayersList[];
  charactersList: Character[];
  itemsList: Item[];
  notes: string[];
}
