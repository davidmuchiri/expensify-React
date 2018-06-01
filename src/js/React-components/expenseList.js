import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../redux/selectors/expensesfilter';

const ExpenseList = props => (
	<div>
		<h1> Expense List</h1>
		{props.expenses.map(expense => (
			<ExpenseListItem key={expense.id} {...expense} />
		))}
	</div>
);

const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
