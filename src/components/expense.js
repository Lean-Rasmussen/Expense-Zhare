import React,{Component} from 'react';



export default class Expense extends Component{
    render(){
        return(
            <div className="Expense">
                 <p>name:{this.props.name}</p>
                 <p>amount:{this.props.amount}</p>
                 <p>description:{this.props.description}</p>
                 <button onClick={()=>this.props.removePayment(this.props.id)}>x</button>
            </div>
        )
    }
}