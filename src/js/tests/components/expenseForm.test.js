import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../React-components/ExpenseForm';
import expenses from '../fixtures/testData';

test('should render ExpenseForm correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});
test('should render Expense form with data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});
