//module import
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//import components
import owedOverview from './owedOverview';


const OwedOverview = shallow(<owedOverview />);

it('addPayment Renders', ()=> {
  expect(OwedOverview).toMatchSnapshot();
})
