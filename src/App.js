import React, { Component } from 'react';

import AddPayer from "./components/addPayer"
import AddPayment from "./components/addPayment"
import ExpenseOverview from "./components/expenseOverview"
import TotalSpend from "./components/totalSpend"

class App extends Component {
  constructor(){
    super()

    this.state = {payers:[],
                  totalExpenses: 0,  
    };
  }
// Adds and removes players from the state
  addPayer=({Name})=>{
    const { payers } =this.state;
    let newPayer = {
      Name:Name,
      id: Name,
      balance: 0,
      //()=> this.payments.reduce((a, b)=>{ return a+b},0),
      payments:[],
    }
    payers.push(newPayer);
    this.setState({payers});

  }
  removePayer= (name)=>{
    let { payers} =this.state;
    payers =  payers.filter((payer)=>{
      return payer.Name !== name
    })
    this.setState({payers});
  }

//Adds and removes payments and deposits or removes them from state
  addPayment=({name, amount, description })=>{
    let payer= this.state.payers.find((payer)=>{
      return(
        payer.Name === name)
    })
    let newPayment ={
      amount: amount,
      description: description,
      id: name+description,
    }
    payer.payments.push(newPayment)
    this.setState({})
  }

  removePayment=(id)=>{
    let {payments} =this.state;
    payments = payments.filter((payment)=>{
      return payment.id !== id;
    })
    this.setState({payments})
    this.totalExpenses();
  }

  render() {
    return (
      <div className="App">
        <AddPayer payers={this.state.payers} addPayer= {this.addPayer} removePayer={this.removePayer} />
        <AddPayment payers={this.state.payers} addPayment={this.addPayment}/>      
        <ExpenseOverview payers={this.state.payers} removePayment ={this.removePayment} />
        <TotalSpend payers={this.state.payers} />
      </div>
    );
  }
}

export default App;
