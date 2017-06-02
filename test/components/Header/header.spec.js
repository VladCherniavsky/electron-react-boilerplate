/**
 * Created by User on 5/30/2017.
 */
import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../../app/components/Header';

describe('Header component', () => {
  it('should render <Header>  component', () => {
    shallow(<Header />);
  });
});
