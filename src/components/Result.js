
import React, { Component } from "react"

class Result extends React.Component {

    constructor(props) {
        super(props);
       
    }

    setStyle() {
      return { 
        color : this.props.color, 
        fontSize: this.props.fontSize 
      }
    }

    render() {
        return (
          <div> 
            <p style = { this.setStyle() }>result</p>
          </div>
        )
    };
  }


  
  export default Result;