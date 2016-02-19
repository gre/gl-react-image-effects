import React, {Component, PropTypes, TouchableOpacity, View, Text, SliderIOS, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0
  },
  title: {
    width: 120,
    textAlign: "right",
    padding: 10,
    paddingRight: 10,
    fontSize: 14,
    fontFamily: "Helvetica"
  },
  value: {
    width: 80,
    padding: 10
  },
  range: {
    flex: 1,
    height: 20
  }
});

export default class Field extends Component {
  render () {
    const { min, max, step, value, onChange, onReset, name, width, prettyPrint } = this.props;
    return <View style={[ styles.field, {width} ]}>
      <TouchableOpacity onPress={onReset}>
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>
      <SliderIOS
        style={styles.range}
        minimumValue={min}
        maximumValue={max}
        step={step || 0.01}
        value={value}
        onValueChange={onChange}
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
