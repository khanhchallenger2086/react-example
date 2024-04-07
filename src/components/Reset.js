
import React, { Component } from "react"

class Reset extends React.Component {
    constructor(props) {
        super(props);
       
    }

    setDefault() {
        this.props.setDefault({ color : 'blue' , fontSize : 65 })
    }

    render() {
        return (
          <div> 
            <button onClick= { () => this.setDefault() }>Reset</button>
          </div>
        )
    };
  }


  
  export default Reset;