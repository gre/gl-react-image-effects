import React, {Component, PropTypes, View, Text, StyleSheet} from "react-native";
import MaterialKit from "react-native-material-kit";
const { mdl: { Slider } } = MaterialKit;

const styles = StyleSheet.create({
  slider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  title: {
    width: 120,
    textAlign: "right",
    paddingRight: 40,
    fontSize: 14,
    fontFamily: "Helvetica"
  },
  value: {
    width: 80
  },
  range: {
    flex: 1,
    height: 30
  }
});

export default class Field extends Component {
  render () {
    const { min, max, step, value, onChange, name, width, prettyPrint } = this.props;
    return <View style={[ styles.slider, {width} ]}>
      <Text style={styles.title}>{name}</Text>
      <Slider
        style={styles.range}
        min={min}
        max={max}
        step={step || 0.01}
        defaultValue={value}
        onChange={onChange}
      />
    <Text style={styles.value}>{prettyPrint(value)}</Text>
    </View>;
  }
}

Field.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  prettyPrint: PropTypes.func.isRequired
};
