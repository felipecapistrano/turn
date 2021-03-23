import boss from "../../content/characters/Enemies/boss1";

import { useStartCombat, useEnemyTurn } from "../hooks";
import ActionMenu from "./ActionMenu/ActionMenu";
import CombatInfo from "./CombatInfo/CombatInfo";
import Party from "./Party";
import Enemies from "./Enemies";
import TurnCounter from "./TurnCounter";

export default function Combat() {
  const loading = useStartCombat(boss);
  useEnemyTurn();

  if (!loading) return null;

  return (
    <>
      <ActionMenu />
      <CombatInfo />
      <Party />
      <Enemies boss={boss} />
      <TurnCounter />
    </>
  );
}
