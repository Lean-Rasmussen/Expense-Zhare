import React,{Component} from 'react';
import Expense from "./expense";


export default class expenseOverview extends Component{
    render(){
        return(
            <div className="expense-overview">
                <h3 className="header__sub">Last added expenses</h3>
                <div className="expense-overview__container">
                    {this.props.payers.map((payer)=>{
                        if(payer.payments.length>0){
                            return(
                            payer.payments.map((payment)=>{
                                    <Expense 
                                        id={payment.id} 
                                        key={payment.id}
                                        description={payment.description}
                                        amount={payment.amount}
                                        removePayment ={this.props.removePayment} />
                                })
                            )
                            }else {
                                console.log("not that long")
                            }       
                        }
                    )}
                </div>
            </div>
        )
    }
}
/* 
 */