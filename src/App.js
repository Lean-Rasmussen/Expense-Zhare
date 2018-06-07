import React, { Component } from 'react';

import AddPayer from "./components/addPayer"
import AddPayment from "./components/addPayment"
import OwedOverview from "./components/owedOverview"
import TotalSpend from "./components/totalSpend"

class App extends Component {
  constructor(){
    super()

    this.state = {payers:[],
                  payments:[]  
    };
  }

  addPayer=({Name})=>{
    const { payers } =this.state;
    let newPayer = {
      Name:Name,
      id: Name,
      balance: +0,
      payments:[],
    }
    payers.push(newPayer);
    this.setState({payers});

  }
  addPayment=({Name, amount, description })=>{
    const { payments } =this.state;
    let newPayment ={
      payer: Name,
      amount:amount,
      description: description,
    }
    payments.push(newPayment)
    this.setState({payments})
  }

  render() {
    return (
      <div className="App">
        <AddPayer payers={this.state.payers} addPayer= {this.addPayer} />
        <AddPayment addPayment={this.addPayment}/>
        <OwedOverview payments={this.state.payments} />
        <TotalSpend />

      </div>
    );
  }
}

export default App;
