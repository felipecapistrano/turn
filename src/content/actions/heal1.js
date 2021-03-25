import heal1Animation from "../../assets/skills/heal1.gif";
import { TARGETS, SKILL_TYPES } from "../constants";

const heal1 = {
  name: "Heal",
  type: SKILL_TYPES.HEAL,
  minDamage: 2,
  maxDamage: 4,
  targets: TARGETS.PARTY,
  animation: heal1Animation,
  timing: 1000,
};

export default heal1;
