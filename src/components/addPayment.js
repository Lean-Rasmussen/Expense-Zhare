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
    //validate returns true if validation is corrrect and false if something did not validate correctly
    validate=()=>{
        if(this.state.expenseAmount >0 && this.state.description !== "" && this.state.name !== "" && this.state.name !== "Pick a name" ){
            return true;
        }else{
            return false;
            
        }
    }

    submitPayment=()=>{
        if(this.validate() ===true){
            this.props.addPayment({
                name:this.state.name, 
                amount:this.state.expenseAmount,
                description: this.state.description,
            })
            this.resetLocalState();
            }else{
                // Do something with an error message here !
                console.log("validation failed")
            }
        }  

    render(){
        return(
            <div className="addPayment">
                <h3 className="header__sub">Add payment</h3>
                <div className="addPayment__name-input">

                    <p className="para-text">Who paied:</p>
                    <select type="text" className="input" 
                        onChange={(event)=>this.inputName(event)}
                        required
                    >
                    <option>Pick a name</option>
                    {this.props.payers.map((payer) =>{
                        return(<option key={payer.Name}>{payer.Name} </option>)})}           
                    </select>
                    <p className="para-text">Expense description:</p>
                    <input type= "text" className="description-input input" 
                    form ="add-payment"
                    placeholder="What did you buy?"
                    value={this.state.description} 
                    onChange={(event)=>this.inputDescription(event)}
                    required
                    />
                    <p className="para-text">Expense amount:</p>
                    <input type= "text" className="amount-input input" placeholder="How much did you spend?"
                        min="0"
                        value={this.state.expenseAmount} 
                        onChange={(event)=>this.inputExpenseAmount(event)}
                        required                  
                    />
                    <br />
                    <button     
                        onClick={()=>this.submitPayment()}
                        type="submit"
                        className="btn"
                    >Add payment</button>
                </div>                
            </div>
        )
    }
}