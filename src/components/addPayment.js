import React,{Component} from 'react';

export default class addPaymnet extends Component{
    constructor(){
        super()
        this.state = {
            description: "",
            expenseAmount: 0,
            name: "",

        }
    }

    resetLocalState= ()=>{
        this.setState({
            description: "",
            expenseAmount: 0,
            name: "",
        })
    }
    inputName=(e)=>{
        this.setState({
            name:e.target.value,
        })
    }
    inputDescription=(e) =>{
            this.setState({
                description: e.target.value,
        })
    }

    inputExpenseAmount=(e) =>{
        if(Number.isInteger(Number.parseFloat(e.target.value))|| "." ){
            this.setState({
                expenseAmount: Number.parseFloat(e.target.value),
            })
        }

    }

    render(){
        return(
            <div className="addPayment">
                <h3>Add payment</h3>
                <div className="addPayment__name-input">
                    <p>Who paied:</p>
                    <select type="text" className="input"
                        placeholder="Who spend the money?" 
                        onChange={(event)=>{this.inputName(event)}}
                        required
                    >

                    {this.props.payers.map((payer) =>{
                        return(
                            <option key={payer.Name}>{payer.Name} </option>
                        )}
                    )}
                    
                    </select>
                    <p>Expense description:</p>
                    <input type= "text" className="description-input input" 
                    placeholder="What did you buy?"
                    value={this.state.description} 
                    onChange={(event)=>{this.inputDescription(event)}}
                    required
                    />
                    <p>Expense amount:</p>
                    <input type= "text" className="amount-input input" placeholder="How much did you spend?"
                        min="0"
                        value={this.state.expenseAmount} 
                        onChange={(event)=>{this.inputExpenseAmount(event)}}
                        required                  
                    />
                    <br />
                    <button 
                        className="btn"
                        onClick={()=>{
                            this.props.addPayment({name:this.state.name, 
                                amount:this.state.expenseAmount,
                                description: this.state.description,
                            })
                            this.resetLocalState()
                            }
                        }
                    >Add payment</button>
                </div>                
            </div>
        )
    }
}