import React, {Component, PropTypes, View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { MKSlider } from "react-native-material-kit";

const styles = StyleSheet.create({
  slider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
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
    const { min, max, step, value, onChange, onReset, name, width, prettyPrint } = this.props;
    return <View style={[ styles.slider, {width} ]}>
      <TouchableOpacity onPress={onReset}>
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
      <MKSlider
        style={styles.range}
        min={min}
        max={max}
        value={value}
        step={step || 0.01}
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
  onReset: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  prettyPrint: PropTypes.func.isRequired
};
