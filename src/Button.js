const React = require("react");
const {
  Component,
  PropTypes
} = React;

const styles = {
  button: {
    fontSize: "1.2em",
    padding: 10
  }
};

class Button extends Component {

  render () {
    const {onPress, children} = this.props;
    return <button style={styles.button} onClick={onPress}>{children}</button>;
  }
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};

module.exports = Button;
