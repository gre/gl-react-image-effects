import React, {Component, PropTypes} from "react";
import {Surface} from "gl-react-dom";
import ImageEffects from "./ImageEffects";

const vdomForContent = ({ url, mainType, type }, onLoadSize) =>
  mainType === "video" ?
  <video loop autoPlay onLoad={e => onLoadSize(e.target.videoWidth, e.target.videoHeight)}>
    <source type={type} src={url} />
  </video> :
  url ?
  <img key={url} src={url} crossOrigin onLoad={e => onLoadSize(e.target.width, e.target.height)} /> :
  url;

const contentForDropEvent = e => {
  const file = e.dataTransfer.files[0];
  if (file) {
    return {
      url: URL.createObjectURL(file),
      type: file.type,
      mainType: file.type.split("/")[0]
    };
  }
  const text = e.dataTransfer.getData("text");
  if (text && text.match(/http[s]?:\/\//)) {
    return { url: text };
  }
  return { url: null };
}

const styles = {
  dropDescr: {
    opacity: 0.3,
    fontStyle: "italic"
  },
  links: {
    paddingTop: 10
  },
  link: {
    color: "#09F",
    fontSize: "0.8em",
    marginRight: 4
  }
};

const width = 400;
const height = 300;

export default class Viewport extends Component {

  constructor (props) {
    super(props);
  }

  onDrop = e => {
    const { onLoadNewContent } = this.props;
    e.preventDefault();
    e.stopPropagation();
    onLoadNewContent(contentForDropEvent(e));
  }

  onDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  onDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  onLoadSize = (width, height) => {
    const { content, onLoadNewContent } = this.props;
    onLoadNewContent({ ...content, width, height });
  }

  onClickUrl = e => {
    const { onLoadNewContent } = this.props;
    e.preventDefault();
    onLoadNewContent({ url: e.target.href });
  }

  captureFrame = cb =>
    this.refs.surface.captureFrame(cb)

  render () {
    const {
      onDrop,
      onDragOver,
      onDragEnter,
      onLoadSize,
      onClickUrl,
      props: { content, effects }
    } = this;
    let w = width, h = height;
    const ratio = content.width && content.height ? content.height/content.width : 1;
    if (ratio < 1)
      h = w * ratio;
    else
      w = h / ratio;

    return <div style={{ minWidth: width, flex: 1 }} onDrop={onDrop} onDragOver={onDragOver} onDragEnter={onDragEnter}>
      <div style={{ width, height, margin: "10px auto" }}>
        <Surface ref="surface" width={w} height={h} autoRedraw={content.mainType === "video"} opaque={false}>
          <ImageEffects width={w} height={h} {...effects}>
            {vdomForContent(content, onLoadSize)}
          </ImageEffects>
        </Surface>
      </div>
      <div style={styles.dropDescr}>^ Drop here an Image, Video or Image URL...</div>
      <div style={styles.links}>{
        "wxqlQkh,G2Whuq3,0bUSEBX,giP58XN,8OdPTjK,iKdXwVm,IvpoR40,zJIxPEo,CKlmtPs,fnMylHI,vGXYiYy,MnOB9Le,YqsZKgc,0BJobQo,Otbz312".split(",")
        .map(id => <span key={id}><a
          onClick={onClickUrl}
          href={`http://i.imgur.com/${id}.jpg`}
          target="_blank"
          style={styles.link}>{id}</a> </span>)
      }</div>
    </div>;
  }
}

Viewport.propTypes = {
  content: PropTypes.object.isRequired,
  effects: PropTypes.object.isRequired,
  onLoadNewContent: PropTypes.func.isRequired
};
