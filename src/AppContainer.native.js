import React, {Component, PropTypes, StyleSheet, ScrollView} from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EEE"
  }
});

export default class AppContainer extends Component {

  render () {
    const {children} = this.props;
    return (
      <ScrollView style={styles.root} contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired
};
