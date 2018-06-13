import React, { Component } from 'react';

import AddPayer from "./components/addPayer"
import AddPayment from "./components/addPayment"
import ExpenseOverview from "./components/expenseOverview"
import TotalSpend from "./components/totalSpend"

class App extends Component {
  constructor(){
    super()

    this.state = {payers:[],
                  payments:[],
                  totalExpenses: 0,  
    };
  }

  addPayer=({Name})=>{
    const { payers } =this.state;
    let newPayer = {
      Name:Name,
      id: Name,
      balance: 0,
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

  addPayment=({name, amount, description })=>{
    const { payments } =this.state;
    let newPayment ={
      name: name,
      amount: amount,
      description: description,
      id: name+description,
    }
    payments.push(newPayment)
    this.setState({payments})
    this.totalExpenses();
    
  }

  removePayment=(id)=>{
    let {payments} =this.state;
    payments = payments.filter((payment)=>{
      return payment.id !== id;
    })
    this.setState({payments})
    this.totalExpenses();
  }

  totalExpenses=()=>{
    let {totalExpenses} = this.state;
    totalExpenses = this.state.payments.reduce((a,b)=>{
      return a + Number.parseInt(b.amount)},0)
      this.setState({totalExpenses})
  }
  render() {
    return (
      <div className="App">
        <AddPayer payers={this.state.payers} addPayer= {this.addPayer} removePayer={this.removePayer} />
        <AddPayment payers={this.state.payers} addPayment={this.addPayment}/>      
        <ExpenseOverview payments={this.state.payments} removePayment ={this.removePayment} />
        <TotalSpend totalExpenses={this.state.totalExpenses} />
      </div>
    );
  }
}

export default App;
