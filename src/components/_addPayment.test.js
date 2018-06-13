//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import AddPaymnet from './addPayment';


const addPayment = shallow(<AddPaymnet />);

it("addPayment Renders", ()=> {
  expect(addPayment).toMatchSnapshot();
})

it("sets the input to state for description",()=>{
  const testText = "enterence to the zoo";
  addPayment.find(".description-input").simulate("change", {target:{value:testText}});
  //expect(addPayment.state().description).toEqual(testText)
})

  it('set the amount input to state iff its a number',()=>{
    const textFailer ="abad";
    const textSuccess = "1513";
    const amountInput = addPayment.find(".amount-input");
    console.log(amountInput)

    it("it fails to set a sting with letters to state",()=>{
      amountInput.simulate("change",{target:{value:textFailer}})
      expect(addPayment.state().expenseAmount).toEqual("john");
    })
    it("lets a numner in stringform to state",()=>{
      amountInput.simulate("change",{target:{value:textSuccess}})
      expect(addPayment.state().expenseAmount).toEqual(textSuccess);
    })
  })
 
