import React, { Component, StyleSheet, PropTypes, Text, TouchableOpacity, Linking } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flex: 1
  },
  text: {
    textDecorationLine: "underline",
    color: "#666"
  }
});

export default class ExportedLink extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired
  };
  onPress = () => Linking.openURL(this.props.children);
  render () {
    const { children } = this.props;
    return <TouchableOpacity onPress={this.onPress} style={styles.root}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>;
  }
}
