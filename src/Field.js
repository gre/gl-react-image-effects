import React, {Component, PropTypes} from "react";

const styles = {
  field: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5px 0"
  },
  title: {
    width: 100,
    textAlign: "right",
    padding: "10px 40px",
    fontSize: "1.2em",
    fontFamily: "Helvetica"
  },
  value: {
    width: 50,
    padding: "10px 20px",
    fontSize: "1em",
    fontFamily: "monospace"
  },
  range: {
    flex: 1,
    height: 30
  }
};

export default class Field extends Component {
  render () {
    const { min, max, step, value, onChange, name, width, prettyPrint } = this.props;
    return <label style={{...styles.field, width }}>
      <span style={styles.title}>{name}</span>
      <input type="range"
        style={styles.range}
        min={min}
        max={max}
        step={step || 0.01}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
      />
      <span style={styles.value}>{prettyPrint(value)}</span>
    </label>;
  }
}

Field.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  prettyPrint: PropTypes.func.isRequired
};
