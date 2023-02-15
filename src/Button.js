import React, { Component } from 'react'
// const [isHovered, setIsHovered] = useState(false);

export default class Button extends Component {
    static defaultProps = {
        title: 'Default Button Title',
        width: '100px',
        click: function () {
                console.log(this, 'default prop log');
                // this.handleClick();
            },
        height: '100px',
        color: 'white',
        bgColor: 'red',
        bgColorHover: 'green',

    }
    constructor (props) {
        super(props)
        this.handleClickIn = this.handleClickIn.bind(this)
        this.handleClickout = this.handleClickout.bind(this)

    }
    handleClickout (e) {
        e.target.style.backgroundColor = 'black'
        e.target.style.color = 'white'
    }
    handleClickIn (e) {
        e.target.style.backgroundColor = 'darkblue'
        e.target.style.color = 'white'
    }
    render() {
        const {click, title, color, bgColor} = this.props;
        return (
            <div className='Button'>
                <button onMouseOut={this.handleClickout} onMouseOver={this.handleClickIn} style={{backgroundColor: bgColor, color: color}} onClick={click}> {title}</button>
            </div>
        )
    }
}
