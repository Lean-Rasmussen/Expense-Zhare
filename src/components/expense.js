import React,{Component} from 'react';



export default class Expense extends Component{
    render(){
        return(
            <div className="expense text">
                <div className="expense__side expense__side--front">
                    <p>name:{this.props.name}</p>
                    <p>amount:{this.props.amount}</p>
                </div>
                <div className="expense__side expense__side--back">
                    <p>description:{this.props.description}</p>
                    <button onClick={()=>this.props.removePayment(this.props.id)}>x</button>            
                </div>
            </div>
        )
    }
}