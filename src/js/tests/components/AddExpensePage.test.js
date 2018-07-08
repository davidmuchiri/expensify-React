import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../React-components/AddExpensePage';
import expenses from '../fixtures/testData';

let startAddExpense, history, wrapper;

beforeEach(() => {
	startAddExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<AddExpensePage
			startAddExpense={startAddExpense}
			history={history}
		/>
	);
});

test('should render AddExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startAddExpense).toHaveBeenCalledWith(expenses[1]);
});
