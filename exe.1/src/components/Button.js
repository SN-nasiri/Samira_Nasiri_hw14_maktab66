import React, { Component } from 'react';
class Button extends Component {
  render() {
    return (
      <button className="Btn btn-secondary btn-sm m-2" onClick={this.props.clickHandler}>{this.props.title}</button>
    )

  }
}
export default Button;