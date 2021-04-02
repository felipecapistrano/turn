import {
  ironSword,
  apprenticeStaff,
  staffOfHealing,
  emptyHand,
} from "../equipments/weapons";

import {
  leatherArmor,
  blackGarbs,
  whiteRobes,
  none,
} from "../equipments/clothes";

export const WEAPONS = {
  NONE: 0,
  IRON_SWORD: 1,
  APPRENTICE_STAFF: 2,
  STAFF_OF_HEALING: 3,
};

export const WEAPONS_PARAMS = {
  [WEAPONS.NONE]: emptyHand,
  [WEAPONS.IRON_SWORD]: ironSword,
  [WEAPONS.APPRENTICE_STAFF]: apprenticeStaff,
  [WEAPONS.STAFF_OF_HEALING]: staffOfHealing,
};

export const CLOTHES = {
  NONE: 0,
  LEATHER_ARMOR: 1,
  BLACK_GARBS: 2,
  WHITE_ROBES: 3,
};

export const CLOTHES_PARAMS = {
  [CLOTHES.NONE]: none,
  [CLOTHES.LEATHER_ARMOR]: leatherArmor,
  [CLOTHES.BLACK_GARBS]: blackGarbs,
  [CLOTHES.WHITE_ROBES]: whiteRobes,
};
