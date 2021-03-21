import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { completeAction } from "../../redux/actions";
import { TARGETS } from "../../content/constants";
import arrow from "../../assets/arrow.png";

export default function CharacterRender({
  character,
  size = 1,
  isEnemy = false,
}) {
  const dispatch = useDispatch();
  const { turnCharacter, targets } = useSelector((state) => state.combat);
  const [hovered, setHovered] = useState(false);

  const canTarget =
    ((isEnemy && (targets === TARGETS.ENEMIES || targets === TARGETS.ALL)) ||
      (!isEnemy && (targets === TARGETS.PARTY || targets === TARGETS.ALL))) &&
    hovered;

  const height = 180 * size;
  const width = 130 * size;

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
  };

  return (
    <div
      onClick={canTarget ? () => dispatch(completeAction(character.id)) : null}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={styles.sprite}
    >
      {canTarget && <img src={arrow} alt="arrow" style={styles.arrow} />}
      <img src={character.sprite} alt={character.name} style={styles.image} />
    </div>
  );
}
