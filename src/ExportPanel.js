import React from "react";
const {
  Component,
  PropTypes
} = React;

const styles = {
  root: {
    margin: "0 auto",
    width: 200,
    display: "flex",
    flexDirection: "column"
  }
};

export default class ExportPanel extends Component {

  render () {
    const {children} = this.props;
    return <div style={styles.root}>
      {children}
    </div>;
  }
}

ExportPanel.propTypes = {
  children: PropTypes.any.isRequired
};
