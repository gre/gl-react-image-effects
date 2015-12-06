import React, {Component, PropTypes, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  root: {
    width: 200,
    flexDirection: "column",
    alignSelf: "center",
    paddingTop: 20
  }
});

export default class ExportPanel extends Component {

  render () {
    const {children} = this.props;
    return <View style={styles.root}>
      {children}
    </View>;
  }
}

ExportPanel.propTypes = {
  children: PropTypes.any.isRequired
};
