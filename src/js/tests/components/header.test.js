import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../React-components/Header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header startLogOut={() => {}} />);
	expect(wrapper).toMatchSnapshot();
});

//should call startLogout on button click
test('should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogout={startLogout} />);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});

//loginpage test files => should call startLogin on button clicks
