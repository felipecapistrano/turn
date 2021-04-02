import { WEAPONS_PARAMS, CLOTHES_PARAMS } from "../../content/constants";
import { useSelector } from "react-redux";

export default function useCharacterSkills() {
  const equips = useSelector((state) => state.combat.turnCharacter.equips);
  const weaponSkills = WEAPONS_PARAMS[equips.weapon].skills;
  const clothesSkills = CLOTHES_PARAMS[equips.clothes].skills;
  const skills = [...weaponSkills, ...clothesSkills];

  return skills;
}
