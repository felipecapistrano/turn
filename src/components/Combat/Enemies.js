import CharacterRender from "./CharacterRender";

export default function Enemies({ boss }) {
  const enemyContainer = {
    display: "flex",
    position: "fixed",
    flexDirection: "column",
    top: "40%",
    right: "20%",
    transform: "translate(0, -50%)",
  };

  return (
    <div style={enemyContainer}>
      <CharacterRender character={boss} size={1.5} isEnemy />
    </div>
  );
}
