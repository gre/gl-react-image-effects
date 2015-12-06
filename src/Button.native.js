import React, { Component, PropTypes, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    backgroundColor: "#ccc",
    borderColor: "#666",
    borderWidth: 1,
    fontSize: 14,
    padding: 10
  }
});

export default class Button extends Component {
  render () {
    const {onPress, children} = this.props;
    return <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{children}</Text>
    </TouchableOpacity>;
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};
