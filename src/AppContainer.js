import React, {Component, PropTypes} from "react";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};

export default class AppContainer extends Component {

  render () {
    const {children} = this.props;
    return (
      <div style={styles.root}>{children}</div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired
};
