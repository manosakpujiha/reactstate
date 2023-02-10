import React, { Component } from 'react';
import './LottoNumbers.css'

export default class LottoNumbers extends Component {
    render() {
        return (
            <div className='LottoNumbers'>
                {this.props.lottoNumbers.map((num, index)=> <div className='LottoNumbers-circle' key={index}>{num}</div>)}
            </div>
        )
    }
}
