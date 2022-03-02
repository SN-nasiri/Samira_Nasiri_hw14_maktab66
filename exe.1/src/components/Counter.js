import React, { Component } from 'react';
import Button from './Button';
class Counter extends Component {
  state = {
    counter: 0,
  }
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleDecreasement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      return 0;
    }
  }
  render() {
    return (
      <div className={'m-5 text-center'}>
        <h1 className={this.getBadgeClasses()} style={{fontSize: '20px'}} >{this.formatCount()}</h1>
        <Button title={'Increment'} clickHandler={this.handleIncrement} />
        <Button title={'Decreasement'} clickHandler={this.handleDecreasement} />
      </div>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.counter === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const counter = this.state.counter;
    return counter === 0 ? 'Zero' : counter;
  }
}

export default Counter;

