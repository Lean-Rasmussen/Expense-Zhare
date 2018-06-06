//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import totalSpend from './totalSpend';


const TotalSpend = shallow(<totalSpend />);

it('addPayment Renders', ()=> {
  expect(TotalSpend).toMatchSnapshot();
})
