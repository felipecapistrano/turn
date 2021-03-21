import { useDispatch, useSelector } from "react-redux";

import { startCombat } from "../../redux/actions";

import boss from "../../content/characters/Enemies/boss1";

import ActionMenu from "./ActionMenu/ActionMenu";
import CombatInfo from "./CombatInfo/CombatInfo";
import Party from "./Party";
import Enemies from "./Enemies";
import TurnCounter from "./TurnCounter";

export default function Combat() {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.party.characters);

  dispatch(startCombat(party, [boss]));

  return (
    <>
      <TurnCounter />
      <ActionMenu />
      <CombatInfo />
      <Party />
      <Enemies boss={boss} />
    </>
  );
}
