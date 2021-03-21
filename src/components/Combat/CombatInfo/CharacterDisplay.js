import ResourceSlider from "../../UI/Sliders/ResourceSlider";

const styles = {
  root: { display: "flex" },
  portrait: { height: 90, borderRadius: 80, alignSelf: "center" },
  cardColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: "5%",
  },
  name: {
    color: "whitesmoke",
    marginRight: "10%",
    fontSize: "18px",
    fontWeight: "bolder",
    alignSelf: "center",
  },
};

export default function CharacterDisplay({ character }) {
  return (
    <div style={styles.root}>
      <img
        src={character.portrait}
        alt={character.name}
        style={styles.portrait}
      />
      <div style={styles.cardColumn}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={styles.name}>{character.name}</div>
        </div>
        <ResourceSlider
          name={"HP"}
          resource={[0, character.maxHP]}
          currentValue={[character.currentHP]}
        />

        <ResourceSlider
          name={"MP"}
          resource={[0, character.maxMP]}
          currentValue={[character.currentMP]}
          primaryColor="blue"
        />
      </div>
    </div>
  );
}
