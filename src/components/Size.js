
import React, { Component } from "react"

class Size extends React.Component {

    constructor(props) {
        super(props);
       
    }

    onChangeSize = (value) => {
          this.props.onChangeSize(value)
    }
    
    render() {
        return (
          <div> 
                  <button onClick={ () => this.onChangeSize(-2) }>Giảm</button>
                  <button onClick={ () => this.onChangeSize(2) }>Tăng</button>
          </div>
        )
    };
  }


  
  export default Size;