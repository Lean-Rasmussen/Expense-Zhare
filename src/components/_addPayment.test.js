//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import addPayment from './addPayment';


const app = shallow(<addPayment />);

it('addPayment Renders', ()=> {
  expect(addPayment).toMatchSnapshot();
})


 
