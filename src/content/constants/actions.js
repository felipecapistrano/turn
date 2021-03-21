import { attack } from "../actions";

export const ACTIONS = {
  NONE: 0,
  ATTACK: 1,
};

export const ACTIONS_PARAMS = {
  [ACTIONS.NONE]: {},
  [ACTIONS.ATTACK]: attack,
};
