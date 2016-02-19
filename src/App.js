import React from "react";
const {Component} = React;
import Field from "./Field";
import Viewport from "./Viewport";
import AppContainer from "./AppContainer";
import EffectsPanel from "./EffectsPanel";
import Button from "./Button";
import ExportPanel from "./ExportPanel";
import ExportedLink from "./ExportedLink";
import uploadImage from "./uploadImage";

const percentagePrint = v => (v * 100).toFixed(0) + "%";
const radiantPrint = r => (180 * r / Math.PI).toFixed(0) + "°";

const initialInputs = {
  blur: 0,
  saturation: 1,
  contrast: 1,
  brightness: 1,
  negative: 0,
  hue: 0,
  sepia: 0,
  flyeye: 0
};

const fields = [
  { id: "blur", name: "Blur", min: 0, max: 6, step: 0.1, prettyPrint: blur => blur.toFixed(1) },
  { id: "contrast", name: "Contrast", min: 0, max: 4, step: 0.1, prettyPrint: percentagePrint },
  { id: "brightness", name: "Brightness", min: 0, max: 4, step: 0.1, prettyPrint: percentagePrint },
  { id: "saturation", name: "Saturation", min: 0, max: 10, step: 0.1, prettyPrint: percentagePrint },
  { id: "hue", name: "HueRotate", min: 0, max: 2 * Math.PI, step: 0.1, prettyPrint: radiantPrint },
  { id: "negative", name: "Negative", min: 0, max: 1, step: 0.05, prettyPrint: percentagePrint },
  { id: "sepia", name: "Sepia", min: 0, max: 1, step: 0.05, prettyPrint: percentagePrint },
  { id: "flyeye", name: "FlyEye", min: 0, max: 1, step: 0.05, prettyPrint: percentagePrint }
];

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      content: {
        uri: "http://i.imgur.com/wxqlQkh.jpg",
        type: "image/jpg",
        mainType: "image",
        width: 512,
        height: 340
      },
      uploaded: null,
      ...initialInputs
    };
  }

  onLoadNewContent = content => {
    this.setState({ content });
  };

  onExport = () =>
    this.refs.viewport.captureFrame()
    .then(uploadImage)
    .then(({ data: { link: uploaded } }) => this.setState({ uploaded }));

  render () {
    const { content, uploaded, ...effects } = this.state;

    return (
      <AppContainer>
        <Viewport
          ref="viewport"
          effects={effects}
          onLoadNewContent={this.onLoadNewContent}
          content={content}
        />
        <EffectsPanel>
          {fields.map(({ id, ...props}) =>
            <Field key={id}
              {...props}
              value={effects[id]}
              onChange={value => this.setState({ [id]: value })}
              onReset={() => this.setState({ [id]: initialInputs[id] })}
            />
          ) }
          <ExportPanel>
            <Button onPress={this.onExport}>UPLOAD TO IMGUR</Button>
            {uploaded ? <ExportedLink>{uploaded}</ExportedLink> : null}
          </ExportPanel>
        </EffectsPanel>
      </AppContainer>
    );
  }
}
