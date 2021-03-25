import { attack, heal1 } from "../actions";

export const ACTIONS = {
  NONE: 0,
  ATTACK: 1,
  HEAL1: 2,
};

export const ACTIONS_PARAMS = {
  [ACTIONS.NONE]: {},
  [ACTIONS.ATTACK]: attack,
  [ACTIONS.HEAL1]: heal1,
};
