import React,{Component} from 'react';


export default class TotalSpend extends Component{
    

    render(){
        return(
            <div className="totalSpend">
            <h3 className="header__sub" >Overview</h3>
            <p className="para-text"> Individual overview:</p>
            {this.props.payers.map((payer) =>{
                console.log(payer)
                        return(
                            <div key={payer.Name}> 
                                <p> {payer.Name} :</p>
                                <p>
                                {payer.payments.reduce((sum, payment)=>{
                                    return sum + payment.amount},0)
                                } 
                                </p>  
                            </div>
                        )}
                    )}      
                <p className="para-text"> Total expenses:
                { this.props.payers.reduce((sum, payer)=>{
                    return sum + payer.payments.reduce((sum, payment)=>{
                        return sum + payment.amount
                        },0)
                    },0)
                },-
                </p>
            </div>
        )
    }
}  
