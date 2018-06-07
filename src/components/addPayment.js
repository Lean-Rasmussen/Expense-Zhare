import React,{Component} from 'react';

export default class addPaymnet extends Component{
    constructor(){
        super()
        this.state = {
            description: "",
            expenseAmount: "",
            Name: "Daniels",

        }
    }

    inputDescription=(e) =>{
            this.setState({
                expenseName: e.target.value,
        })
    }

    inputExpenseAmount=(e) =>{
        if(Number.isInteger(e.target.value-0)){
            this.setState({
                expenseAmount: e.target.value,
            })
        }

    }

    render(){
        return(
            <div className="addPayment">
                <h3>Add payment</h3>
                <div className="addPayment__name-input">
                    <p>Who paied:</p>
                    <input type="text" className="input"
                        placeholder="Who spend the money?" 
                        required
                    />
                    <p>Expense description:</p>
                    <input type= "text" className="input" 
                    placeholder="What did you buy?"
                    value={this.state.description} 
                    onChange={(event)=>{this.inputDescription(event)}}
                    required
                    />
                    <p>Expense amount:</p>
                    <input type= "text" className="input" placeholder="How much did you spend?"
                        min="0"
                        value={this.state.expenseAmount} 
                        onChange={(event)=>{this.inputExpenseAmount(event)}}
                        required                  
                    />
                    <br />
                    <button 
                        className="btn"
                        onClick={()=>this.props.addPayer({Name:this.state.input})}
                        onClick={()=>this.props.addPayment({Name:this.state.Name, 
                                amount:this.state.expenseAmount,
                                description: this.state.description,})}
                    >Add payment</button>
                </div>                
            </div>
        )
    }
}