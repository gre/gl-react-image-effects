import {React} from "gl-react";
const {Component} = React;
import Field from "./Field";
import Viewport from "./Viewport";
import AppContainer from "./AppContainer";
import EffectsPanel from "./EffectsPanel";
import Button from "./Button";
import ExportedLink from "./ExportedLink";
import ExportPanel from "./ExportPanel";

const percentagePrint = v => (v * 100).toFixed(0) + "%";
const radiantPrint = r => (180 * r / Math.PI).toFixed(0) + "°";

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      content: {
        url: "http://i.imgur.com/wxqlQkh.jpg",
        type: "image/jpg",
        mainType: "image",
        width: 512,
        height: 340
      },
      exported: null,
      blur: 0,
      saturation: 1,
      contrast: 1,
      brightness: 1,
      negative: 0,
      hue: 0,
      sepia: 0
    };
  }

  onLoadNewContent = content => {
    this.setState({ content });
  }

  onExport = () =>
    this.refs.viewport.captureFrame(exported => this.setState({ exported }))

  render () {
    const { content, exported, ...effects } = this.state;

    return (
      <AppContainer>
        <Viewport
          ref="viewport"
          effects={effects}
          onLoadNewContent={this.onLoadNewContent}
          content={content}
        />
        <EffectsPanel>
          <Field name="Blur"
            value={effects.blur}
            onChange={blur => this.setState({ blur })}
            min={0}
            max={6}
            step={0.1}
            prettyPrint={blur => blur.toFixed(1)}
          />
          <Field name="Contrast"
            value={effects.contrast}
            onChange={contrast => this.setState({ contrast })}
            min={0}
            max={4}
            step={0.01}
            prettyPrint={percentagePrint}
          />
          <Field name="Brightness"
            value={effects.brightness}
            onChange={brightness => this.setState({ brightness })}
            min={0}
            max={4}
            step={0.01}
            prettyPrint={percentagePrint}
          />
          <Field name="Saturation"
            value={effects.saturation}
            onChange={saturation => this.setState({ saturation })}
            min={0}
            max={10}
            step={0.01}
            prettyPrint={percentagePrint}
          />
          <Field name="HueRotate"
            value={effects.hue}
            onChange={hue => this.setState({ hue })}
            min={0}
            max={2 * Math.PI}
            step={0.05}
            prettyPrint={radiantPrint}
          />
          <Field name="Negative"
            value={effects.negative}
            onChange={negative => this.setState({ negative })}
            min={0}
            max={1}
            step={0.01}
            prettyPrint={percentagePrint}
          />
          <Field name="Sepia"
            value={effects.sepia}
            onChange={sepia => this.setState({ sepia })}
            min={0}
            max={1}
            step={0.01}
            prettyPrint={percentagePrint}
          />
          <ExportPanel>
            <Button onPress={this.onExport}>EXPORT</Button>
            { exported ? <ExportedLink exported={exported} /> : null }
          </ExportPanel>
        </EffectsPanel>
      </AppContainer>
    );
  }
}
