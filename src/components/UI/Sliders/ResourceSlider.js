import { Slider, Tracks } from "react-compound-slider";

export default function ResourceSlider({
  resource = [0, 100],
  currentValue = [100],
  primaryColor = "red",
  secondaryColor = "gray",
  name = "placeholder",
  size = 8,
}) {
  const styles = {
    root: {
      // Give the slider some width
      position: "relative",
      width: "100%",
      margin: 6,
    },
    resourceName: {
      fontSize: 14,
      alignSelf: "start",
      color: "gray",
      marginBottom: "",
    },
    totalResource: {
      position: "absolute",
      width: "100%",
      height: size,
      backgroundColor: secondaryColor,
      border: "1px solid black",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  };

  return (
    <>
      <div
        style={styles.resourceName}
      >{`${name}: ${currentValue} / ${resource[1]}`}</div>
      <Slider
        rootStyle={styles.root}
        domain={resource}
        step={1}
        values={currentValue}
      >
        <div style={styles.totalResource} />
        <Tracks right={false}>
          {({ tracks }) => (
            <div>
              {tracks.map(({ id, source, target }) => (
                <div
                  key={id}
                  //tem que ser dessa forma horrorosa infelizmente
                  style={{
                    position: "relative",
                    border: "1px solid black",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    height: size,
                    backgroundColor: primaryColor,
                    left: `${source.percent}%`,
                    width: `${target.percent - source.percent}%`,
                  }}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </>
  );
}
