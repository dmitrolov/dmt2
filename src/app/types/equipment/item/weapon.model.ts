import { Damage } from '../../gameMechanics/Damage';
import { Item } from './item.model';

export interface Weapon extends Item {
  attack: {
    melee: Damage;
    range: Damage;
  };
}
