import React from "react";
import "./ColorBlock.css";

class ColorBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="color-block"
        onClick={() => {
          this.props.onClick(this.props.background);
        }}
        style={{
          backgroundColor: this.props.background
        }}
      ></div>
    );
  }
}

export default ColorBlock;
