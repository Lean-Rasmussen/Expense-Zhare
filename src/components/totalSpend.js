import React,{Component} from 'react';
import PayerOwed from "./payerOwed";


export default class totalSpend extends Component{
    render(){
        return(
            <div className="totalSpend">
                Here is the totalSpend
                <PayerOwed />
            </div>
        )
    }
}