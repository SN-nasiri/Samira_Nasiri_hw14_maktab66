import React, { Component } from 'react';
import './color.css'
class Color extends Component {
  render() {
    return (
      <div className={'color'}>
        <span style={{ background: `${this.props.codeColor}` }}></span>
        <p>{this.props.codeColor}</p>
      </div>
    );
  }
}
export default Color;