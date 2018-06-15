import React,{Component} from 'react';


export default class TotalSpend extends Component{
    constructor(){
        super()
        this.state={
            NameWithExpenses : this.totalExpenses,
            another: this.totalExpenses
        }
    }
    

    totalExpenses=()=>{
        let payerExpenses = this.props.payers.map((payer)=>{
            let sum = 0;
            payer.payments.map((x)=>{
                sum += x.amount-0;
            })   
            return{
                name:payer.Name,
                balance:sum
            }       
        })
        console.log(payerExpenses)
        this.setState({
            NameWithExpenses: payerExpenses,
        })
        console.log(this.state.NameWithExpenses)
    }

    render(){
        return(
            <div className="totalSpend">
            <h3 className="header__sub" >Overview</h3>
            <p className="para-text"> Individual overview:</p>
            {this.props.payers.map((payer) =>{
                        return(
                            <div key={payer.Name}>{payer.Name} : {payer.balance} 
                           
                             </div>
                        )}
                    )}      
                <p className="para-text"> Total expenses:</p>
                
                <button onClick = {()=>this.totalExpenses()}>click her efor stuff </button>
            </div>
        )
    }
}  


/* {payer.payments.reduce((a,b)=>{
    return a + Number.parseInt(b.amount)},0)} */