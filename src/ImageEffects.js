import GL, { React } from "gl-react";
import {Blur} from "gl-react-blur";
import {ContrastSaturationBrightness} from "gl-react-contrast-saturation-brightness";
import {Negative} from "gl-react-negative";
import {HueRotate} from "gl-react-hue-rotate";
import {ColorMatrix} from "gl-react-color-matrix";
const {PropTypes} = React;


const mixArrays = (arr1, arr2, m) => arr1.map((v, i) => (1-m) * v + m * arr2[i]);

const matrixForSepia = sepia => mixArrays([
  // Identity
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
], [
  // one way to do Sepia: grayscale & use alpha channel to add red & remove blue
  .3, .3, .3, 0,
  .6, .6, .6, 0,
  .1, .1, .1, 0,
  0.2, 0, -0.2, 1
], sepia);

export default GL.createComponent(
({
  children,
  width,
  height,
  blur,
  contrast,
  saturation,
  brightness,
  negative,
  hue,
  sepia
}) =>

<ColorMatrix matrix={matrixForSepia(sepia)}>
  <HueRotate hue={hue}>
    <Negative factor={negative}>
      <ContrastSaturationBrightness
        contrast={contrast}
        saturation={saturation}
        brightness={brightness}>
            <Blur
              passes={6}
              factor={blur}
              width={width}
              height={height}>
              {children}
            </Blur>
      </ContrastSaturationBrightness>
    </Negative>
  </HueRotate>
</ColorMatrix>,

  {
    displayName: "ImageEffects",
    propTypes: {
      children: PropTypes.node.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      blur: PropTypes.number.isRequired,
      contrast: PropTypes.number.isRequired,
      saturation: PropTypes.number.isRequired,
      brightness: PropTypes.number.isRequired,
      negative: PropTypes.number.isRequired,
      hue: PropTypes.number.isRequired,
      sepia: PropTypes.number.isRequired
    }
  });
