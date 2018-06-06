import React, { Component } from 'react';

class Payer extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <li className="Payer" id={1}>
                <p> Name:{this.props.name}</p>
                <button className="btn"
                > X </button>
            </li>
        )
    }
}

export default Payer;