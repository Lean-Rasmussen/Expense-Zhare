import React,{Component} from 'react';
import PayerOwed from "./payerOwed";


export default class owedOverview extends Component{
    render(){
        return(
            <div className="owedOverview">
                Here is the owedOverview
                <PayerOwed />
            </div>
        )
    }
}