//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import AddPayer from './addPayer';

import App from '../App';


const app=shallow(<App />)
const addPayer = shallow(<AddPayer />);

it('addPayment Renders', ()=> {
  expect(addPayer).toMatchSnapshot();
})

it("initialises with the no `state` ",()=>{
  expect(app.state().payers).toEqual([])
});

it("takes in input and put it into local state",()=>{
  const testName= "Daniel";
  addPayer.find(".addPayer__input").simulate("change", {target:{value:testName}});
  it("changes state when input has been made",()=>{
    expect(addPayer.state().input).toEqual(testName)
  })
  //dont think this test can be done since the test firest from one compoenent
  //to another and the function that I am trying to active does not work in shallow
  //renderings. This would be different with redux
  it("add a new payer to App state when clicking add payer",()=>{
    addPayer.find(".addPayer__btn").simulate("click");
    const tempPayer ={name: "Daniel", id: "Daniel", balance:0, Payments:[]}
    expect(app.state().payers).toEqual([tempPayer])
  });

})


it("checks if its longer than two letters long")

it("commits it to state")

it("shows who is in on the show")
 