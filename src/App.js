import React, { Component } from "react";
import ColorPicker from "./components/ColorPicker";
import Size from "./components/Size";
import Result from "./components/Result";
import Reset from "./components/Reset";

class App extends Component  {
  constructor(props) {
    super(props);
      this.state = {
          color : 'red',
          fontSize: 25
      };
  }

  changeColor = (value) => {
     this.setState({
        color : value
     });
  }

  onChangeSize = (value) => {
    console.log(this.state.fontSize);
    this.setState({
        fontSize: this.state.fontSize + value
    })
  }

  setDefault = (value) => {
    this.setState({
        color: value.color,
        fontSize: value.fontSize
    })
  }

  render() {
    return (
      <div className="App">
            <div className="row">
                <div  className="col-6">
                    <ColorPicker 
                      color={ this.state.color }
                      changeColor = { this.changeColor }
                    />
                </div>
                <div className="col-6">
                    <Size onChangeSize= { this.onChangeSize } />
                    <Reset setDefault= { this.setDefault } />
                </div>

                <div className="col-12">
                  <Result  
                    color={ this.state.color }
                    fontSize= { this.state.fontSize }
                  />
                </div>
            </div>
      </div>
    );
  }
}

export default App;

