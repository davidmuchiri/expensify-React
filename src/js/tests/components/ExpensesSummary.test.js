import React, { Component } from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/testData';
import { ExpenseSummary } from '../../React-components/ExpensesSummary';

test('should render summary component with no expenses', () => {
	const wrapper = shallow(
		<ExpenseSummary expensesCount={1} expensesTotal={235} />
	);
	expect(wrapper).toMatchSnapshot();
});
test('should render summary component with expenses', () => {
	const wrapper = shallow(
		<ExpenseSummary expensesCount={5} expensesTotal={400} />
	);
	expect(wrapper).toMatchSnapshot();
});
