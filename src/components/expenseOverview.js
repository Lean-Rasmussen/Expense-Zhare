import React,{Component} from 'react';
import Expense from "./expense";


export default class expenseOverview extends Component{
/* this array takes the array of expenses that is passed from the main state,
flattens the array and sorts it by dates, then it passes the newest 5 to state */

    render(){

        console.log(this.props.payments)

             return(
            <div className="expense-overview">
                <h3 className="header__sub">Last added expenses{this.props.grill}</h3>
                <div className="expense-overview__container">
                 {this.props.payments.map((payment)=>{
                        return(
                            <Expense 
                                key={payment.id}
                                name={payment.name}
                                date={payment.date}
                                description={payment.description}
                                amount={payment.amount}
                                removePayment ={this.props.removePayment} />
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

     