import React, { Component } from 'react';
export default class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount
  }

  render(){
    const msg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (<div>{msg}</div>)
}
}
