import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Header from '../../React-components/Header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();

	// expect(wrapper.find('h1').text()).toBe('Expensify');
});
