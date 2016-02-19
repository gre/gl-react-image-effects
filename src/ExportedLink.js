const React = require("react");
const {
  Component,
  PropTypes
} = React;

const styles = {
  a: {
    color: "#aaa",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 10
  }
};

class ExportedLink extends Component {

  render () {
    const { children } = this.props;
    return <a style={styles.a} href={children} target="_blank">
        {children}
      </a>;
  }
}

ExportedLink.propTypes = {
  children: PropTypes.string.isRequired
};

module.exports = ExportedLink;
