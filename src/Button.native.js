import React, { Component, PropTypes, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    backgroundColor: "#ccc",
    borderColor: "#666",
    borderWidth: 1,
    fontSize: 14,
    padding: 10
  },
  buttonPending: {
    opacity: 0.3
  }
});

export default class Button extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pending: false
    };
  }
  onPress = () => {
    if (this.state.pending) return;
    const {onPress} = this.props;
    this.setState({ pending: true });
    Promise.resolve()
    .then(onPress)
    .catch(e => console.warn(e)) // eslint-disable-line no-console
    .then(() => this.setState({ pending: false }));
  };
  render () {
    const {onPress, children} = this.props;
    const { pending } = this.state;
    return <TouchableOpacity onPress={onPress ? this.onPress : null}>
      <Text style={[ styles.button, pending && styles.buttonPending ]}>{children}</Text>
    </TouchableOpacity>;
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};
