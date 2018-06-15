import React,{Component} from 'react';
import Expense from "./expense";


export default class expenseOverview extends Component{
    render(){
        return(
            <div className="expense-overview">
                <h3 className="header__sub">Last added expenses</h3>
                {this.props.payments.map((payment) =>{
                                return(
                                        <Expense 
                                        name={payment.name} 
                                        id={payment.id} 
                                        key={payment.id}
                                        description={payment.description}
                                        amount={payment.amount}
                                        removePayment ={this.props.removePayment} />
                                        )}
                                    )}    
            </div>
        )
    }
}