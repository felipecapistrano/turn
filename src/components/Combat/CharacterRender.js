import { useState } from "react";
import { useSelector } from "react-redux";

import { useAction } from "../hooks";
import { TARGETS, ACTIONS_PARAMS, SKILL_TYPES } from "../../content/constants";
import arrow from "../../assets/arrow.png";

export default function CharacterRender({
  character,
  size = 1,
  isEnemy = false,
}) {
  const { turnCharacter, targets, currentAction, animation } = useSelector(
    (state) => state.combat
  );
  const [hovered, setHovered] = useState(false);
  const action = useAction();

  const canTarget =
    ((isEnemy && (targets === TARGETS.ENEMIES || targets === TARGETS.ALL)) ||
      (!isEnemy && (targets === TARGETS.PARTY || targets === TARGETS.ALL))) &&
    hovered &&
    !character.dead;

  const height = 180 * size;
  const width = 140 * size;

  const styles = {
    sprite: {
      transform:
        turnCharacter.id === character.id
          ? `translate(${isEnemy ? "-100%" : "100%"}, 0)`
          : "",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      transition: "0.3s",
    },
    arrow: {
      marginBottom: height * 1.2,
      position: "absolute",
      transform: "rotate(180deg)",
      alignSelf: "center",
      height: 32,
      width: 32,
    },
    image: {
      height,
      width,
    },
    skill: {
      position: "absolute",
      alignSelf: "center",
      height,
      width,
    },
    damage: {
      color: `${
        animation.type === SKILL_TYPES.DAMAGE
          ? "rgba(255, 49, 24)"
          : "rgba(49, 238, 24)"
      }`,
      fontSize: "36px",
      fontWeight: "bold",
      position: "absolute",
      alignSelf: "center",
      height: height / 4,
      width: width / 4,
      marginBottom: height,
      marginLeft: width,
    },
  };

  return (
    <div
      onClick={
        canTarget
          ? () => action(character.id, ACTIONS_PARAMS[currentAction].timing)
          : null
      }
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={styles.sprite}
    >
      {animation.target === character.id && (
        <>
          <div style={styles.damage}>{animation.damage}</div>
          <img
            src={ACTIONS_PARAMS[currentAction].animation}
            alt={ACTIONS_PARAMS[currentAction].name}
            style={styles.skill}
          />
        </>
      )}
      {canTarget && <img src={arrow} alt="arrow" style={styles.arrow} />}
      <img src={character.sprite} alt={character.name} style={styles.image} />
    </div>
  );
}
