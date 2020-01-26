export interface CharacterAction {
  inspiration: boolean;    // Вдохновение
  experience: number;      // Опыт
  bonus: number;           // Бонус мастерства

  armorClass: number;      // Класс брони
  hitPoints: {            // Здоровье
    max: number;           // Максимальное
    temp: number;          // Временное
    current: number;       // Текущее
  };
  deathSaves: {           // Спасброски от смерти
    successes: number;     // Успешные
    failures: number;      // Провальные
  };
}
