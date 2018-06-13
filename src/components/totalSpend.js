import React,{Component} from 'react';


export default class TotalSpend extends Component{
    render(){
        return(
            <div className="totalSpend">
                <p> Total expenses:{this.props.totalExpenses}</p>
            </div>
        )
    }
}  