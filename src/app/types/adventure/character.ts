export interface CharacterClass { // Класс
  name: string;         // Название
  level: number;        // Уровень
}

export interface CharacterInfo { // Основная и обязательная информация о персонаже
  characterName: string;     // Имя персонажа
  race: string;              // Расса
  subRace?: string;          // Подрасса
  classes: CharacterClass[]; // Класс
  background: string;        // Предыстория
  feats: string[];          // Черты
}

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

export interface CharacterAttributes { // Атрибуты
  strength: number;        // Сила
  dexterity: number;       // Ловкость
  constitution: number;    // Выносливость
  intelligence: number;    // Интеллект
  wisdom: number;          // Мудрость
  charisma: number;        // Харизма
}

export interface SkillsProficiency { // Владение навыками
  Athletics: boolean;		      // Атлетика

  Acrobatics: boolean;		    // Акробатика
  SleightOfHand: boolean;	    // Ловкость рук
  Stealth: boolean;			      // Скрытность

  Endurance: boolean;		      // Выносливость

  Investigation: boolean;	    // Анализ
  History: boolean;			      // История
  Arcana: boolean;			      // Магия
  Nature: boolean;			      // Природа
  Religion: boolean;	      	// Религия

  Perception: boolean;	    	// Внимательность
  Survival: boolean;		      // Выживание
  Medicine: boolean;	      	// Медицина
  Insight: boolean;		      	// Проницательность
  AnimalHandling: boolean;  	// Уход за животными

  Performance: boolean;		    // Выступление
  Intimidation: boolean;    	// Запугивание
  Deception: boolean;	      	// Обман
  Persuasion: boolean;	    	// Убеждение
};

export interface CharacterAction {
  inspiration: boolean;    // Вдохновение
  experience: number;      // Опыт
  bonus: number;           // Бонус мастерства

  armorClass: number;      // Класс брони
  hitPoints: {             // Здоровье
    max: number;           // Максимальное
    temp: number;          // Временное
    current: number;       // Текущее
  };
  deathSaves: {            // Спасброски от смерти
    successes: number;     // Успешные
    failures: number;      // Провальные
  };
}

export interface CharacterStats {  // Информация необходимая для приключений и сражений
  speed: number;                   // Скорость
  initiative: number;              // Бонус инициативы
  size: 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'huge'
  | 'gargantuan';                  // Размер
  darkVision: number;              // Тёмное зрение
}

export interface CharacterEffects {
  savingThrows: string[];          // Бонус к спас броскам
  resistance: string[];            // Сопротивление (Уменьшение урона х2, считается после всех модификаторов)
  immunity: string[];              // Иммунитет
}

export interface CharacterPersonalQualities {
  personalityTraits: string[];
  ideals: string[];
  bonds: string[];
  flaws: string[];
}

export interface CharacterProficiency {
  skills: SkillsProficiency;     // Владение атрибутивными навыками
  languages: string[];  // Владение языками
  tools: string[];      // Владение инструментами
  weapons: string[];    // Владение оружием
  armor: string[];      // Владение доспехами
}

export interface CharacterAbout {
  info: CharacterInfo;               // Основная и обязательная информация о персонаже
  description: CharacterDescription;
  attributes: CharacterAttributes;
  action: CharacterAction;
  stats: CharacterStats;
  effects: CharacterEffects;
  personalQualities: CharacterPersonalQualities;
  proficiency: CharacterProficiency;
}

export interface CharacterEquipment {
  id: string;
  count: number;
  isEquiped: boolean;
  isStored: boolean;
}

export interface Character {
  id: string;
  owner: string;

  about: CharacterAbout;
  abilities: string[];
  equipment: CharacterEquipment[];
}

export const characterMock: Character = {
  id: '',
  owner: '',
  about: {
    proficiency: {
      languages: ["dwarvish", "common"],
      tools: ["Tool Proficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brew er’s supplies, or mason’s tools"],
      armor: ["light", "medium", "heavy", "shields"],
      skills: { // Владение навыками
        Athletics: false,		      // Атлетика

        Acrobatics: false,		    // Акробатика
        SleightOfHand: false,	    // Ловкость рук
        Stealth: false,			      // Скрытность

        Endurance: false,		      // Выносливость

        Investigation: false,	    // Анализ
        History: false,			      // История
        Arcana: false,			      // Магия
        Nature: false,			      // Природа
        Religion: false,	      	// Религия

        Perception: false,	    	// Внимательность
        Survival: false,		      // Выживание
        Medicine: false,	      	// Медицина
        Insight: false,		      	// Проницательность
        AnimalHandling: false,  	// Уход за животными

        Performance: false,		    // Выступление
        Intimidation: false,    	// Запугивание
        Deception: false,	      	// Обман
        Persuasion: false,	    	// Убеждение
      },
      weapons: ["battleAxe", "handAxe", "throwingHammer", "warHammer", "martial", "simple"]
    },
    personalQualities: {
      bonds: [],
      ideals: [],
      flaws: [],
      personalityTraits: []
    },
    info: {
      subRace: "Скальный Гном",
      characterName: "Гремми",
      feats: [],
      race: "Гном",
      classes: [
        { name: "Волшебник", level: 3 }
      ],
      background: "Мудрец"
    },
    description: {
      weight: 20,
      age: {
        human: 20, mod: 0, total: 0
      },
      sex: "female",
      alignment: "",
      height: 120,
      imageUrl: "https://rpwiki.ru/images/3/3d/%D0%A5%D1%80%D0%BE%D0%BC%D0%B8.jpg"
    },
    attributes: {
      dexterity: 12,
      intelligence: 17,
      strength: 8,
      constitution: 15,
      wisdom: 13,
      charisma: 10
    },
    effects: {
      immunity: [],
      resistance: ["poison"],
      savingThrows: ["poison", "strength", "constitution"]
    },
    action: {
      deathSaves: {
        successes: 0,
        failures: 0
      },
      inspiration: false,
      hitPoints: {
        temp: 0, max: 0, current: 0
      },
      bonus: 2,
      armorClass: 0,
      experience: 900
    },
    stats: {
      darkVision: 60,
      speed: 25,
      initiative: 0,
      size: "small"
    }
  },
  equipment: [
    {
      id: "greatAxe",
      count: 1,
      isEquiped: false,
      isStored: false,
    },
    {
      id: "handAxe",
      count: 2,
      isEquiped: false,
      isStored: false,
    },
    {
      id: "explorersPack",
      count: 1,
      isEquiped: false,
      isStored: false,
    },
    {
      id: 'javelin',
      count: 4,
      isEquiped: false,
      isStored: false,
    }
  ],
  abilities: []
}
