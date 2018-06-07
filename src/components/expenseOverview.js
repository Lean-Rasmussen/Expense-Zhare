import React,{Component} from 'react';
import Expense from "./payerOwed";


export default class expenseOverview extends Component{
    render(){
        return(
            <div className="owedOverview">
        {this.props.payments.map((payment) =>{
                        return(
                                <Expense 
                                name={payment.Name} 
                                id={payment.description} 
                                description={payment.description}
                                amount={payment.amount} />
                                )}
                            )}    
            </div>
        )
    }
}