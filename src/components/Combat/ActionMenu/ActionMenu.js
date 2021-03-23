import { useSelector, useDispatch } from "react-redux";

import { ACTIONS } from "../../../content/constants";
import { setAction } from "../../../redux/actions";
import { Button } from "../../UI/Buttons";
import { MenuContainer } from "../../UI/Containers";

export default function ActionMenu() {
  const { currentAction } = useSelector((state) => state.combat);
  const dispatch = useDispatch();

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
        disabled={currentAction}
        onClick={() => dispatch(setAction(ACTIONS.ATTACK))}
      >
        Attack
      </Button>
      <Button disabled={currentAction}>Skills</Button>
      <Button disabled={currentAction}>Item</Button>
      <Button disabled={currentAction}>Guard</Button>
    </MenuContainer>
  );
}
