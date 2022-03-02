import React, { Component } from 'react';
import Color from "./Color";
class ColorGenerator extends Component {
  state={
    colors:[],
  }
  makeCodeColor = () => {
    let codeColor = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
      color += codeColor[Math.floor(Math.random() * 16)];
    }
    this.setState({
      colors: [...this.state.colors, color],
    });
  };
  render(){
    return(
      <div className={'m-5 text-center'}>
        <button className={'p-2'} onClick={this.makeCodeColor }>Add color</button>
        {this.state.colors.map(color => (<Color key={color} codeColor={color} />))}
      </div>
    )
  }
}
export default ColorGenerator ;