import attackAnimation from "../../assets/skills/attack.gif";
import fireAnimation from "../../assets/skills/fire.gif";
import heal1Animation from "../../assets/skills/heal1.gif";
import { TARGETS, SKILL_TYPES, ELEMENT_TYPES } from "../constants";

export const attack = {
  name: "Attack",
  type: SKILL_TYPES.DAMAGE,
  minDamage: 2,
  maxDamage: 4,
  element: ELEMENT_TYPES.NONE,
  targets: TARGETS.ENEMIES,
  animation: attackAnimation,
  timing: 1000,
  cost: 0,
};

export const greatSlash = {
  name: "Great Slash",
  type: SKILL_TYPES.DAMAGE,
  minDamage: 4,
  maxDamage: 8,
  element: ELEMENT_TYPES.NONE,
  targets: TARGETS.ENEMIES,
  animation: attackAnimation,
  timing: 1000,
  cost: 5,
};

export const fire = {
  name: "Fire",
  type: SKILL_TYPES.DAMAGE,
  minDamage: 3,
  maxDamage: 6,
  element: ELEMENT_TYPES.FIRE,
  targets: TARGETS.ENEMIES,
  animation: fireAnimation,
  timing: 1000,
  cost: 4,
};

export const water = {
  name: "Water",
  type: SKILL_TYPES.DAMAGE,
  minDamage: 3,
  maxDamage: 6,
  element: ELEMENT_TYPES.WATER,
  targets: TARGETS.ENEMIES,
  animation: attackAnimation,
  timing: 1000,
  cost: 4,
};

export const earth = {
  name: "Earth",
  type: SKILL_TYPES.DAMAGE,
  minDamage: 3,
  maxDamage: 6,
  element: ELEMENT_TYPES.EARTH,
  targets: TARGETS.ENEMIES,
  animation: attackAnimation,
  timing: 1000,
  cost: 4,
};

export const heal1 = {
  name: "Heal",
  type: SKILL_TYPES.HEAL,
  minDamage: 2,
  maxDamage: 4,
  element: ELEMENT_TYPES.NONE,
  targets: TARGETS.PARTY,
  animation: heal1Animation,
  timing: 1000,
  cost: 5,
};
