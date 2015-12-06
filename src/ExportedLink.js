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
    const { exported } = this.props;
    return <a style={styles.a} href={exported} download="exported.png">
        <img src={exported} width="100%" />
        Click To Download
      </a>;
  }
}

ExportedLink.propTypes = {
  exported: PropTypes.string.isRequired
};

module.exports = ExportedLink;
