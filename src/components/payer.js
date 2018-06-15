import React, { Component } from 'react';

class Payer extends Component{

    render(){
        return(
            <li className="addPayer__list__item" id={1}>
                <p>{this.props.name} 
                    <a 
                        onClick={()=>this.props.removePayer(this.props.name)} 
                        className="btn--remove"
                > X </a></p>
                
            </li>
        )
    }
}

export default Payer;