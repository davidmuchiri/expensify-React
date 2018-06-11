import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../React-components/expenseListItem';

import expenses from '../fixtures/testData';

test('should render an item', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});
