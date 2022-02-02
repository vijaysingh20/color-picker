import React from "react";
import ColorBlock from "./components/ColorBlock";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "lightcoral"
    };
  }

  updateColor = (colorValue) => {
    this.setState({
      background: colorValue
    });
  };

  render() {
    return (
      <>
        <h1>Color Picker</h1>
        <div className="color-container">
          <ColorBlock background="red" onClick={this.updateColor} />
          <ColorBlock background="green" onClick={this.updateColor} />
          <ColorBlock background="blue" onClick={this.updateColor} />
          <ColorBlock background="yellow" onClick={this.updateColor} />
          <ColorBlock background="orange" onClick={this.updateColor} />
        </div>
        <div
          className="target-div"
          style={{
            backgroundColor: this.state.background
          }}
        ></div>
      </>
    );
  }
}

export default App;
