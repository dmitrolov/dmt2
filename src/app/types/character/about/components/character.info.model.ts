export interface CharacterInfo {  // Основная и обязательная информация о персонаже
  playerName: string;     // Имя игрока
  characterName: string;  // Имя персонажа
  race: string;           // Расса
  subRace?: string;       // Подрасса
  classes: {              // Класс
    name: string;         // Название
    level: number;        // Уровень
  }[];
  background: string;     // Предыстория
  feats?: string[];       // Черты
}
