import React,{Component} from 'react';
import Expense from "./expense";

export default class payerOwed extends Component{
    render(){
        return(
            <div className="payerOwed">
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