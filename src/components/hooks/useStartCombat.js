import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startCombat } from "../../redux/actions";

export default function useStartCombat(boss) {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.party.characters);
  const turnCharacter = useSelector((state) => state.combat.turnCharacter);

  useEffect(() => {
    dispatch(startCombat(party, [boss]));
  }, [party, boss, dispatch]);

  return !!turnCharacter;
}
