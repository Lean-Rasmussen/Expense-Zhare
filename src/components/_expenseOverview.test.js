//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import expenseOverview from './expenseOverview';


const ExpenseOverview = shallow(<expenseOverview />);

it('addPayment Renders', ()=> {
  expect(ExpenseOverview).toMatchSnapshot();
})
