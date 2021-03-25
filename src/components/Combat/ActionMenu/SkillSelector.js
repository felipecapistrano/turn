import { useDispatch } from "react-redux";

import { ACTIONS_PARAMS } from "../../../content/constants";
import { setAction } from "../../../redux/actions";
import { Button } from "../../UI/Buttons";
import { MenuContainer } from "../../UI/Containers";

export default function SkillSelector({ skills, close }) {
  const dispatch = useDispatch();

  return (
    <MenuContainer
      style={{
        height: "60%",
        width: "20%",
        justifyContent: "start",
        bottom: 0,
        padding: 6,
      }}
    >
      {skills.map((skill) => (
        <Button
          onClick={() => {
            dispatch(setAction(skill));
            close();
          }}
        >
          {ACTIONS_PARAMS[skill].name}
        </Button>
      ))}
    </MenuContainer>
  );
}
