import React, {Component, PropTypes, View, TouchableOpacity, NativeModules} from "react-native";
import {Surface} from "gl-react-native";
import ImageEffects from "./ImageEffects";
import Dimensions from "Dimensions";
const {UIImagePickerManager} = NativeModules;

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default class Viewport extends Component {

  constructor (props) {
    super(props);
  }

  captureFrame = opts => this.refs.surface.captureFrame(opts);

  onPress = () =>
    UIImagePickerManager.showImagePicker({}, ({ uri, width, height }) => {
      if (uri) this.props.onLoadNewContent({ uri, width, height });
    });

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

    return <TouchableOpacity onPress={this.onPress}>
      <View style={{ height, flex: 1, alignItems: "center" }}>
        <Surface ref="surface" width={w} height={h}>
          <ImageEffects width={w} height={h} {...effects}>
            {content.uri}
          </ImageEffects>
        </Surface>
      </View>
    </TouchableOpacity>;
  }
}

Viewport.propTypes = {
  content: PropTypes.object.isRequired,
  effects: PropTypes.object.isRequired,
  onLoadNewContent: PropTypes.func.isRequired
};
