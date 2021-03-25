import attackAnimation from "../../assets/skills/attack.gif";
import { TARGETS, SKILL_TYPES } from "../constants";

const attack = {
  name: "Attack",
  type: SKILL_TYPES.DAMAGE,
  minDamage: 2,
  maxDamage: 4,
  targets: TARGETS.ENEMIES,
  animation: attackAnimation,
  timing: 1000,
};

export default attack;
