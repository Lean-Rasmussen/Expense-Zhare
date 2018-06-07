import React, { Component } from 'react';

class Payer extends Component{

    render(){
        return(
            <li className="Payer" id={1}>
                <p>{this.props.name}</p>
                <button className="btn"
                > X </button>
            </li>
        )
    }
}

export default Payer;