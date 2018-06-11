import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../React-components/ExpenseDashboardPage';

test('should render Expense Dashboard', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);
	expect(wrapper).toMatchSnapshot();
});
