import React, { Component, View } from "react-native";

export default class ExportedLink extends Component {
  componentWillReceiveProps ({ exported }) {
    if (this.props.exported !== exported) {
      console.log(exported);
    }
  }
  render () {
    return <View />;
  }
}
