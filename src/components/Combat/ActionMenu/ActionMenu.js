import { useSelector, useDispatch } from "react-redux";

import { ACTIONS } from "../../../content/constants";
import { setAction } from "../../../redux/actions";
import { Button } from "../../UI/Buttons";
import { MenuContainer } from "../../UI/Containers";

export default function ActionMenu() {
  const { currentAction, turnCharacter } = useSelector((state) => state.combat);
  const dispatch = useDispatch();

  const disabled = !!currentAction || turnCharacter.id > 1000;

  return (
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
        onClick={() => dispatch(setAction(ACTIONS.ATTACK))}
      >
        Attack
      </Button>
      <Button disabled={disabled}>Skills</Button>
      <Button disabled={disabled}>Item</Button>
      <Button disabled={disabled}>Guard</Button>
    </MenuContainer>
  );
}
