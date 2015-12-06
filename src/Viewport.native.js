import React, {Component, PropTypes, View} from "react-native";
import {Surface} from "gl-react-native";
import ImageEffects from "./ImageEffects";
import Dimensions from "Dimensions";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default class Viewport extends Component {

  constructor (props) {
    super(props);
  }

  captureFrame = cb =>
    this.refs.surface.captureFrame(cb)

  render () {
    const {
      props: { content, effects }
    } = this;
    const width = windowWidth;
    const height = Math.floor(windowHeight / 3);
    let w = width, h = height;
    const ratio = content.width && content.height ? content.height / content.width : 1;
    if (ratio < 1)
      h = w * ratio;
    else
      w = h / ratio;

    return <View style={{ minWidth: width, height, flex: 1 }}>
      <Surface ref="surface" width={w} height={h}>
        <ImageEffects width={w} height={h} {...effects}>
          {content.url}
        </ImageEffects>
      </Surface>
    </View>;
  }
}

Viewport.propTypes = {
  content: PropTypes.object.isRequired,
  effects: PropTypes.object.isRequired,
  onLoadNewContent: PropTypes.func.isRequired
};
