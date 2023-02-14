import React, { Component } from 'react';
import head from './images/head.png';
import tail from './images/tail.png';

export default class CoinFlipper extends Component {
  static defaultProps = { 

  }
  constructor (props) {
    super(props);
    this.state = {
      countFlips: 0,
      headCount: 0,
      tailCount: 0,
      coinState: 1,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin(){
    let rand = Math.floor((Math.random()*2));    
    if (rand === 0) { 
      return (this.setState((state) => {
        return {countFlips: state.countFlips+1, coinState: rand, headCount: state.headCount+1}
      }))
    } 
    this.setState((state) => {
      return {countFlips: state.countFlips+1, coinState: rand, tailCount: state.tailCount+1}
    })
    console.log(this.state);
  }

  handleClick () {
    this.flipCoin();
  }
  render() {
      const getCoinImage = (image) => <img width='100px' src={image} alt={image}/>;
      const {countFlips, headCount, tailCount, coinState} = this.state;
    return (
      <div>
        <p>{coinState === 1 ? getCoinImage(head) : getCoinImage(tail)}</p>
        <button onClick={this.handleClick}>click me</button>
        <p>{countFlips} flips so far, {headCount} heads and {tailCount} tail.</p>
      </div>
    )
  }
}
