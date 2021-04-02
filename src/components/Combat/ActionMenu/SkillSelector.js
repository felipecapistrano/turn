import { useDispatch, useSelector } from "react-redux";

import { useCharacterSkills } from "../../hooks/";
import { ACTIONS_PARAMS } from "../../../content/constants";
import { setAction } from "../../../redux/actions";
import { Button } from "../../UI/Buttons";
import { MenuContainer } from "../../UI/Containers";

const styles = {
  title: {
    color: "white",
    textAlign: "center",
    fontSize: "24px",
  },
  skill: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default function SkillSelector({ close }) {
  const dispatch = useDispatch();
  const skills = useCharacterSkills();
  const { turnCharacter, currentAction } = useSelector((state) => state.combat);
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
      <div style={styles.title}>Skills</div>
      {skills.map((skill) => (
        <Button
          key={skill}
          pressed={currentAction === skill}
          style={styles.skill}
          disabled={turnCharacter.currentMP < ACTIONS_PARAMS[skill].cost}
          onClick={() => dispatch(setAction(skill))}
        >
          <div>{ACTIONS_PARAMS[skill].name} </div>
          <div> {`${ACTIONS_PARAMS[skill].cost} MP`} </div>
        </Button>
      ))}
    </MenuContainer>
  );
}
