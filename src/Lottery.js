import React, { Component } from 'react'
import './Lottery.css'
import LottoNumbers from './LottoNumbers'
export default class Lottery extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.generateRandomArray = this.generateRandomArray.bind(this, props.Length, 0, props.maxValue)
        this.state = (props.title === 'Mini Daily')?{randArr: ['','','','',], manos: 'manos'}:{randArr: [  '','','','','',''], manos: 'manos'};
    }
    generateRandomArray(length, minValue, maxValue) {
        const randomArray = [];
        for (let i = 0; i < length; i++) {
            randomArray.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
        }
        return {randArr: randomArray};
    }
    handleClick() {
        this.setState(this.generateRandomArray)
    }
    render() {  
        return (
            <div className='Lottery'>
                <h2>{this.props.title}</h2>
                <LottoNumbers lottoNumbers={this.state.randArr}/>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}
