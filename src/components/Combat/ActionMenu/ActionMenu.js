import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SkillSelector from "./SkillSelector";
import { ACTIONS } from "../../../content/constants";
import { setAction } from "../../../redux/actions";
import { Button } from "../../UI/Buttons";
import { MenuContainer } from "../../UI/Containers";

export default function ActionMenu() {
  const [skills, setSkills] = useState(false);
  const toggle = () => setSkills(!skills);

  const { turnCharacter, currentAction, animation } = useSelector(
    (state) => state.combat
  );
  const dispatch = useDispatch();

  const enemyTurn = turnCharacter.id > 1000;

  if (animation.target || enemyTurn) return null;
  console.log(currentAction);
  console.log(ACTIONS.ATTACK);
  return (
    <>
      {skills && <SkillSelector skills={turnCharacter.skills} close={toggle} />}
      <MenuContainer
        style={{
          width: "40%",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, 0)",
          flexDirection: "row",
          padding: 6,
        }}
      >
        <Button
          pressed={currentAction === ACTIONS.ATTACK}
          disabled={enemyTurn}
          onClick={() => {
            dispatch(setAction(ACTIONS.ATTACK));
          }}
        >
          Attack
        </Button>
        <Button disabled={enemyTurn} onClick={() => toggle()}>
          Skills
        </Button>
        <Button disabled={enemyTurn}>Item</Button>
        <Button disabled={enemyTurn}>Guard</Button>
      </MenuContainer>
    </>
  );
}
