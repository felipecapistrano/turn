import { MenuContainer } from "../../UI/Containers";
import CharacterDisplay from "./CharacterDisplay";
import { useCombatParty } from "../../hooks";

export default function CombatInfo() {
  const characters = useCombatParty();

  return characters.map((character, index) => (
    <MenuContainer
      key={character.id}
      transparent
      style={{
        width: "16%",
        top: `${index * 13}%`,
        padding: 5,
      }}
    >
      <CharacterDisplay character={character} />
    </MenuContainer>
  ));
}
