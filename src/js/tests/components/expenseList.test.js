import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../React-components/expenseList';
import expenses from '../fixtures/testData';

test('should render ExpenseList with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
	const wrapper = shallow(<ExpenseList expenses={[]} />);
	expect(wrapper).toMatchSnapshot();
});
