import React, { Component } from 'react';

import AddPayer from "./components/addPayer"
import AddPayment from "./components/addPayment"
import OwedOverview from "./components/owedOverview"
import TotalSpend from "./components/totalSpend"

class App extends Component {
  constructor(){
    super()

    this.state = {payers:[
      
    ]};
    
  }

  addPayer=({Name})=>{
    const { payers } =this.state;
    
    var newPayer = {
      Name:Name,
      id: Name,
      balance: +0,
      payments:[],
    }
    payers.push(newPayer);
    this.setState({payers});
    //Name < 3 ? error.push("Name must be longer");
    //error.length == 0 ?this.setState({payers}) : console.log(error);
    //const error=[];
  }
  render() {
    return (
      <div className="App">
        <AddPayer payers={this.state.payers} addPayer= {this.addPayer} />
        <AddPayment />
        <OwedOverview />
        <TotalSpend />

      </div>
    );
  }
}

export default App;
