//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import payerOwed from './payerOwed';


const PayerOwed = shallow(<payerOwed />);

it('addPayment Renders', ()=> {
  expect(PayerOwed).toMatchSnapshot();
})
