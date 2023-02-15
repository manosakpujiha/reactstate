import React, { Component } from 'react';
import './ColorBoxes.css'
import Box from './Box';

export default class ColorBoxes extends Component {
constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.generateColors = this.generateColors.bind(this);
    this.state = {
        colors : [
            "black",
            "white",
            "gray",
            "red",
            "green",
            "blue",
            "yellow",
            "orange",
            "purple",
            "pink"
          ],
    }
}

generateColors(){
    const colors = [];
    for (let i = 0; i < 25; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const color = `rgb(${red}, ${green}, ${blue})`;
        colors.push(color);
    }
    return colors
}

handleClick(e){
        console.log(e);
}

render() {
    return (
        <div className='ColorBoxes'> 
            { this.state.colors.map((c, index, arr) => <Box c={c} a={arr}  key={index} />)}
        </div>
    )
  }
}
