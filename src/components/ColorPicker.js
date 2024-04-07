// function ColorPicker() {
//     this.state = {
//         color: ['red', 'green' , 'blue', 'yellow']
//     }

//     var  elementsColor = this.state.color.map((color, index) => {
//         return <span key={index} style={this.setStyle(color)}></span>
//     })

//     function setStyle(color) {
//         return { backgroundColor : color }
//     }

//     return (
//       <div className="Spancolor">
//             { elementsColor }
//       </div>
//     );
//   }

import React, { Component } from "react"

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'green' , 'blue', 'yellow']
        };
    }

    setStyle = (color) => {
        return { backgroundColor : color }
    }

    
    changeColor = (value) => {
        this.props.changeColor(value);
    }

    render() {
        var  elementsColor = this.state.color.map((color, index) => {
            return   <span key={index} style={this.setStyle(color)} className={ this.props.color === color ? 'active-span' : ''  }  onClick={ () => this.changeColor(color) }></span>
        });


        return (
            <div className="Spancolor">
                    { elementsColor }
            </div>
        )
    };
  }


  
  export default ColorPicker;