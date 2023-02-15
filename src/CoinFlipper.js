import React, { Component } from 'react';
import Button from './Button';
import head from './images/head.png';
import tail from './images/tail.png';
import './CoinFlipper.css'

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
    this.flipCoin = this.flipCoin.bind(this)
  }

  flipCoin(){
    let rand = Math.floor((Math.random()*2));    
    if (rand === 1) { 
      return (this.setState((state) => {
        return {countFlips: state.countFlips+1, coinState: rand, headCount: state.headCount+1}
      }))
    } 
    this.setState((state) => {
      return {countFlips: state.countFlips+1, coinState: rand, tailCount: state.tailCount+1}
    })
    
  }

  handleClick (e) {
    this.flipCoin();
    console.log(this.state, e.target);
  }
  render() {
      const getCoinImage = (image) => <img width='100px' src={image} alt={image}/>;
      const {countFlips, headCount, tailCount, coinState} = this.state;
    return (
      <div className='CoinFlipper'>
        <p>{coinState === 1 ? getCoinImage(head) : getCoinImage(tail)}</p>
        <Button click={this.handleClick} title='Click to flip!' color='gold' />
        <h1>{countFlips} flips so far, {headCount} heads and {tailCount} tail.</h1>
      </div>
    )
  }
}
