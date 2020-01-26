export interface CharacterDescription {
  alignment: string;       // Мировозрение
  imageUrl: string;        // Ссылка на портрет персонажа
  sex: 'male' | 'female';  // Пол персонажа
  age: {                   // Возраст персонажа
    human: number;         // Возраст персонажа по человеческим меркам
    mod: number;           // Модификатор возраста
    total: number;         // Реальный возраст персонажа
  };
  height: number;          // Рост персонажа
  weight: number;          // Вес персонажа
}
