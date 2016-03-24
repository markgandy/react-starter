import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import HelloWorld from '../components/HelloWorld';

describe('<HelloWorld />', () => {
  it('renders Hello, World!', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.text()).to.contain('Hello, World!');
  });
});
