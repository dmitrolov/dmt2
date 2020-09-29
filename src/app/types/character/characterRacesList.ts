import { DomLocalization } from '../dom/Dom';
import { characterMock } from './Character';
import { CharacterRace } from './characterRace';

interface RacesList extends CharacterRace {
  generatorData: {
    height: {
      min: number;
      max: number;
    };
    weight: {
      min: number;
      max: number;
    };
    ageModifier: number;
    names: {
      male: DomLocalization;
      female: DomLocalization;
    };
    image: string;
  };
}

const SkillsProficiencyMock = characterMock.about.proficiency.skills;

export const racesList: RacesList[] = [
  {
    value: 'dwarf',
    title: {
      en: 'Dwarf',
      ru: 'Дварф',
    },
    generatorData: {
      height: {
        max: 5,
        min: 4,
      },
      weight: {
        max: 170,
        min: 130,
      },
      ageModifier: 4,
      names: {
        male: {
          en: [
            'Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor',
            'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk',
            'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek',
            'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim',
            'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek',
            'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal',
          ],
          ru: [
            'Адрик', 'Альберих', 'Баренд', 'Баэрн', 'Броттор',
            'Бруенор', 'Вондал', 'Вэйт', 'Гардаин', 'Даин',
            'Даррак', 'Делг', 'Килдрак', 'Моргран', 'Орсик',
            'Оскар', 'Рангрим', 'Рюрик', 'Таклинн', 'Торадин',
            'Тордек', 'Торин', 'Травок', 'Траубон', 'Ульфгар',
            'Фаргрим', 'Флинт', 'Харбек', 'Эберк', 'Эйнкиль',
          ],
        },
        female: {
          en: [
            'Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal',
            'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda',
            'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd',
            'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl',
            'Torbera', 'Torgga', 'Vistra'
          ],
          ru: [
            'Артин', 'Бардрин', 'Вистра', 'Гуннлода', 'Гурдис',
            'Дагнал', 'Диеза', 'Илде', 'Катра', 'Кристид',
            'Лифтраса', 'Мардред', 'Одхильд', 'Рисвин', 'Саннл',
            'Торбера', 'Торгга', 'Фалкрунн', 'Финеллен', 'Хельджа',
            'Хлин', 'Эльдет', 'Эмбер',
          ],
        },
      },
      image: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/b/b6/Dwarf-5e.png',
    },
    attributes: {
      constitution: 2,
      charisma: 0,
      wisdom: 0,
      intelligence: 0,
      dexterity: 0,
      strength: 0,
    },
    stats: {
      size: 'small',
      speed: 25,
      darkVision: 60,
      initiative: 0,
    },
    effects: {
      savingThrows: ['poison'],
      resistance: ['poison'],
      immunity: [],
    },
    proficiency: {
      weapons: ['battleAxe', 'handAxe', 'throwingHammer', 'warHammer'],
      tools: ['Tool Proficiency. You gain proficiency with the artisan’s ' +
      'tools of your choice: smith’s tools, brew er’s supplies, or mason’s tools'], // ??????????
      languages: ['dwarvish', 'common'],
      armor: [],
      skills: SkillsProficiencyMock,
    },
    abilities: [],
    subRaces: [
      {
        value: 'dwarfMountain',
        title: {
          en: 'Mountain Dwarf',
          ru: 'Горный Дварф'
        },
        attributes: {
          strength: 2,
          dexterity: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
          constitution: 0,
        },
        proficiency: {
          armor: ['light', 'medium'],
          skills: SkillsProficiencyMock,
          weapons: [],
          tools: [],
          languages: [],
        },
        abilities: [],
        stats: {
          initiative: 0,
          speed: 0,
          size: 'small',
          darkVision: 0,
        },
        effects: {
          resistance: [],
          savingThrows: [],
          immunity: [],
        }
      },
      {
        value: 'dwarfHill',
        title: {
          en: 'Hill Dwarf',
          ru: 'Холмовой Дварф'
        },
        attributes: {
          wisdom: 1,
          constitution: 0,
          charisma: 0,
          intelligence: 0,
          dexterity: 0,
          strength: 0,
        },
        abilities: ['dwarvenToughness'],
        stats: {
          darkVision: 0,
          size: 'small',
          speed: 0,
          initiative: 0,
        },
        effects: {
          resistance: [],
          savingThrows: [],
          immunity: [],
        },
        proficiency: {
          languages: [],
          tools: [],
          weapons: [],
          skills: SkillsProficiencyMock,
          armor: [],
        }
      }
    ]

  },
  {
    value: 'gnome',
    title: {
      en: 'Gnome',
      ru: 'Гном',
    },
    generatorData: {
      height: {
        min: 3,
        max: 4
      },
      weight: {
        min: 40,
        max: 45,
      },
      ageModifier: 5,
      names: {
        male: {
          en: [
            'Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell',
            'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug',
            'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen',
            'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri',
            'Warryn', 'Wrenn', 'Zook'
          ],
          ru: [
            'Алвин', 'Алстон', 'Боддинок', 'Брок', 'Бюргел',
            'Варрин', 'Вренн', 'Гербо', 'Гимбл', 'Глим',
            'Джебеддо', 'Димбл', 'Зук', 'Келлен', 'Намфудл',
            'Оррин', 'Рундар', 'Сибо', 'Синдри', 'Фонкин',
            'Фрюг', 'Элдон', 'Эрки'
          ],
        },
        female: {
          en: [
            'Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella',
            'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli',
            'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx',
            'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana',
            'Waywocket', 'Zanna'
          ],
          ru: [
            'Бимпноттин', 'Брина', 'Вейуокет', 'Донелла', 'Дувамил',
            'Занна', 'Карамип', 'Карлин', 'Лилли', 'Лорилла',
            'Лупмоттин', 'Маднаб', 'Никс', 'Нисса', 'Ода',
            'Орла', 'Ройвин', 'Тана', 'Шамил', 'Эливик',
            'Элиджобелл', 'Элла'],
        }
      },
      image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png'
    },
    stats: {
      size: 'small',
      speed: 25,
      darkVision: 60,
      initiative: 0,
    },
    effects: {
      immunity: [],
      savingThrows: [],
      resistance: [],
    },
    attributes: {
      intelligence: 2,
      strength: 0,
      dexterity: 0,
      wisdom: 0,
      charisma: 0,
      constitution: 0,
    },
    proficiency: {
      languages: ['common', 'gnomish'],
      armor: [],
      skills: SkillsProficiencyMock,
      weapons: [],
      tools: [],
    },
    abilities: ['gnomeCunning'],
    subRaces: [
      {
        value: 'gnomeForest',
        title: {
          en: 'Forest gnome',
          ru: 'Лесной гном',
        },
        attributes: {
          dexterity: 1,
          constitution: 0,
          charisma: 0,
          wisdom: 0,
          strength: 0,
          intelligence: 0,
        },
        abilities: ['naturalIllusionist', 'speakWithSmallBeasts'],
        proficiency: {
          tools: [],
          weapons: [],
          skills: SkillsProficiencyMock,
          armor: [],
          languages: [],
        },
        stats: {
          initiative: 0,
          speed: 0,
          size: 'small',
          darkVision: 0,
        },
        effects: {
          resistance: [],
          savingThrows: [],
          immunity: [],
        },
      },
      {
        value: 'gnomeRock',
        title: {
          en: 'Rock gnome',
          ru: 'Скальный гном',
        },
        attributes: {
          constitution: 1,
          intelligence: 0,
          strength: 0,
          wisdom: 0,
          charisma: 0,
          dexterity: 0,
        },
        proficiency: {
          tools: ['tinsmith'],
          languages: [],
          armor: [],
          skills: SkillsProficiencyMock,
          weapons: [],
        },
        abilities: ['artificersLore', 'tinker'],
        stats: {
          darkVision: 0,
          size: 'small',
          speed: 0,
          initiative: 0,
        },
        effects: {
          immunity: [],
          savingThrows: [],
          resistance: [],
        },
      }
    ]
  },
];
