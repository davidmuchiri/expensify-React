import React from 'react';
import getExpensesTotal from '../redux/selectors/selectExpensesTotal';
import { connect } from 'react-redux';
import selectExpenses from '../redux/selectors/expensesfilter';
import numeral from 'numeral';

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
	const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
	const formattedExpenseTotal = numeral(expensesTotal).format('$0,0.00');

	return (
		<div>
			<h1>
				Viewing {expensesCount} {expenseWord} totalling{' '}
				{formattedExpenseTotal}
			</h1>
		</div>
	);
};

const mapStateToProps = state => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expensesCount: visibleExpenses.length,
		expensesTotal: getExpensesTotal(visibleExpenses)
	};
};
export default connect(mapStateToProps)(ExpenseSummary);
