import React,{Component} from 'react';

export default class addPaymnet extends Component{
    render(){
        return(
            <div className="addPayment">
                <h3>Add payment</h3>
                <div className="addPayment__name-input">
                    <p>Who paied:</p>
                    <input type="text" className="input" />
                    <p>Expense name:</p>
                    <input type= "text" className="input" />
                    <p>Expense amount:</p>
                    <input type= "text" className="input" />
                    <br />
                    <button className="btn">Add payment</button>
                </div>                
            </div>
        )
    }
}