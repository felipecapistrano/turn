import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { enemyTurn } from "../../redux/actions";

export default function useEnemyTurn() {
  const dispatch = useDispatch();
  const turnCharacter = useSelector((state) => state.combat.turnCharacter);
  const isEnemy = turnCharacter?.id > 1000;

  useEffect(() => {
    if (isEnemy) setTimeout(() => dispatch(enemyTurn()), 1200);
  }, [isEnemy, dispatch]);
}
