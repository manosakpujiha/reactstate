import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css'

export default class RollDice extends Component {
    static defaultProps = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
    }
    constructor (props) {
        super(props);
        this.state = {die1: 'three', die2: 'four', rolling: false}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this);
        let num = this.props[Math.floor(Math.random()*Object.keys(this.props).length+1)];
        let num2 = this.props[Math.floor(Math.random()*Object.keys(this.props).length+1)];
        this.setState({ rolling: true});
        setTimeout(()=> this.setState({die1: num, die2: num2, rolling: false}), 1000);
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Dice face={this.state.die1} rolling={this.state.rolling == true ? 'RollDice-shake': ''}/>
                    <Dice face={this.state.die2} rolling={this.state.rolling == true ? 'RollDice-shake': ''}/>
                </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>
                  {this.state.rolling == true ? 'Rolling...' : 'Click to roll!'}  
                </button>
            </div>
        )
    }
}