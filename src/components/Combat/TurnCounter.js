import { useSelector } from "react-redux";

import { MenuContainer } from "../UI/Containers";

const styles = {
  root: {
    left: "50%",
    transform: "translate(-50%, 0)",
    top: "1%",
    padding: "6px",
  },
  typography: { color: "white", textAlign: "center", fontSize: "24px" },
  characters: { display: "flex", flexDirection: "row", alignSelf: "center" },
  next: { display: "flex", flexDirection: "column", height: "100px" },
  sprite: { height: "75px" },
};

export default function TurnCounter() {
  const { participants, turn } = useSelector((state) => state.combat);

  return (
    <MenuContainer style={styles.root}>
      <div style={styles.typography}>Turn: {turn}</div>
      <div style={styles.characters}>
        {participants.map(
          (participant, index) =>
            !participant.dead && (
              <div key={participant.id} style={styles.next}>
                <img
                  style={styles.sprite}
                  src={participant.sprite}
                  alt={participant.name}
                />
                {index === 0 ? <div style={styles.typography}>Next</div> : null}
              </div>
            )
        )}
      </div>
    </MenuContainer>
  );
}
