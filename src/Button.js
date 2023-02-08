import React, { Component } from 'react'

export default class Button extends Component {
    constructor (props) {
        super(props)
        
    }
    handleClick() {
       let word = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten"
          }
       let num = word[Math.floor(Math.random()*10 +1)];
       console.log(num)
          return num;
    }
  render() {
    return (
        <div>
            <button onClick={this.handleClick}>
                Click Me!
            </button>
        </div>
    )
  }
}
