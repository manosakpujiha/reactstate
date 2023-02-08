import React, { Component } from 'react'
export default class Clicker extends Component {
    constructor (props) {
        super(props)
        this.state = {num: 1};
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let rand = Math.floor(Math.random()* 10 )+ 1;
        console.log(rand);
        this.setState({num:rand});
    }
  render() {
    return (
        <div>
            <h1>Clicker {this.state.num }
            </h1>
            <div>
                {this.state.num === 7 ? 'you win': <button onClick={this.handleClick}>Count</button> }
            </div>
        </div>
    )
  }
}
