import CharacterRender from "./CharacterRender";
import { useCombatParty } from "../hooks";

export default function Party() {
  const characters = useCombatParty();

  const partyContainer = {
    display: "flex",
    position: "fixed",
    flexDirection: "column",
    top: "50%",
    left: "20%",
    transform: "translate(0, -50%)",
  };

  return (
    <div style={partyContainer}>
      {characters.map((character) => (
        <CharacterRender key={character.id} character={character} />
      ))}
    </div>
  );
}
