import React, { Component } from 'react';
import './Box.css'

export default class Box extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.getRandomItem = this.getRandomItem.bind(this)
        this.state = {
            color: this.props.c,
            colors : this.props.a,
        }
    }
    getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex]
    }
    handleClick(e){
        let randomColor = this.getRandomItem(this.state.colors);
        while ( randomColor === this.state.color) {
            randomColor =  this.getRandomItem(this.state.colors)
        }
        this.setState(() => {return {color: randomColor}})
    }
    render() {
        return (
            <div className='Box' onClick={this.handleClick} style={{backgroundColor: this.state.color}}>Box</div>
        )
    }
}
