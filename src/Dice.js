import React, { Component } from 'react';
import './Dice.css';

export default class Dice extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div className='Dice'>
                <i  className={`Dice-icon fa-solid fa-dice-${this.props.face} ${this.props.rolling}`}></i>
            </div>
        )
    }
}
