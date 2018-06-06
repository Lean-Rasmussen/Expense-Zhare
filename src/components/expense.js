import React,{Component} from 'react';



export default class Expense extends Component{
    render(){
        return(
            <div className="Expense">
                <p>expense:</p>
                <p>amount:</p>
                <p>payed by:</p>
            </div>
        )
    }
}