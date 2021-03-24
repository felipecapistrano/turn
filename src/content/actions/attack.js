import attackAnimation from "../../assets/skills/attack.gif";
import { TARGETS } from "../constants";

const attack = {
  name: "Attack",
  minDamage: 2,
  maxDamage: 4,
  targets: TARGETS.ENEMIES,
  animation: attackAnimation,
  timing: 1000,
};

export default attack;
