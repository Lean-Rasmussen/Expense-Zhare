import React, { Component } from 'react';

import AddPayer from "./components/addPayer"
import AddPayment from "./components/addPayment"
import OwedOverview from "./components/owedOverview"
import TotalSpend from "./components/totalSpend"

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AddPayer />
        <AddPayment />
        <OwedOverview />
        <TotalSpend />

      </div>
    );
  }
}

export default App;
