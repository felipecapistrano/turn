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

  const { turnCharacter } = useSelector((state) => state.combat);
  const dispatch = useDispatch();

  const disabled = turnCharacter.id > 1000;

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
          disabled={disabled}
          onClick={() => {
            setSkills(false);
            dispatch(setAction(ACTIONS.ATTACK));
          }}
        >
          Attack
        </Button>
        <Button disabled={disabled} onClick={() => toggle()}>
          Skills
        </Button>
        <Button disabled={disabled}>Item</Button>
        <Button disabled={disabled}>Guard</Button>
      </MenuContainer>
    </>
  );
}
