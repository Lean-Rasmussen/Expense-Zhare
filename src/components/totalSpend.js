import React,{Component} from 'react';
import Expense from "./expense";


export default class totalSpend extends Component{
    render(){
        return(
            <div className="totalSpend">
                <Expense />
                <p> Total expenses:</p>
            </div>
        )
    }
}  