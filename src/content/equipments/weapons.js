import { ACTIONS } from "../constants/actions";

export const emptyHand = {
  name: "None",
  sprite: "",
  skills: [],
};

export const ironSword = {
  name: "Iron Sword",
  sprite: "",
  skills: [ACTIONS.GREAT_SLASH],
};

export const apprenticeStaff = {
  name: "Apprentice Staff",
  sprite: "",
  skills: [ACTIONS.FIRE, ACTIONS.WATER, ACTIONS.EARTH],
};

export const staffOfHealing = {
  name: "Staff of Healing",
  sprite: "",
  skills: [ACTIONS.HEAL1],
};
