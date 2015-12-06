import React, {Component, PropTypes} from "react";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 400
  }
};

export default class EffectsPanel extends Component {

  render () {
    const {children} = this.props;
    return (
      <div style={styles.root}>{children}</div>
    );
  }
}

EffectsPanel.propTypes = {
  children: PropTypes.node.isRequired
};
