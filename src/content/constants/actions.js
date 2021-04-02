import { attack, heal1, greatSlash, fire, water, earth } from "../actions";

export const ACTIONS = {
  NONE: 0,
  ATTACK: 1,
  GREAT_SLASH: 2,
  FIRE: 3,
  WATER: 4,
  EARTH: 5,
  HEAL1: 6,
};

export const ACTIONS_PARAMS = {
  [ACTIONS.NONE]: {},
  [ACTIONS.ATTACK]: attack,
  [ACTIONS.GREAT_SLASH]: greatSlash,
  [ACTIONS.FIRE]: fire,
  [ACTIONS.WATER]: water,
  [ACTIONS.EARTH]: earth,
  [ACTIONS.HEAL1]: heal1,
};
