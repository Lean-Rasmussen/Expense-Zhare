import React, { Component } from 'react';
import Payer from "./payer"

class AddPayer extends Component{
    constructor(){
        super()

        this.state ={input:""};
    }
    inputValue = (e) =>{
        this.setState({input:e.target.value})
    }


    render(){
        return(
            <div className="addPayer">
                <h3>Add contributor</h3>
                <p> Name:</p>
                <input type="text" 
                        onChange={(event)=>{this.inputValue(event)}} 
                        className="input addPayer__input" value={this.state.input}
                />
                <button className="addPayer__btn btn "
                onClick={()=>this.props.addPayer({Name:this.state.input})}
                > Add </button>
                <ul>
                {this.props.payers.map((payer) =>{
              return(
                    <Payer name ={payer.name} id={payer.id} />

                    )}
                )}     
                </ul>
            </div>
        )
    }
}

export default AddPayer;