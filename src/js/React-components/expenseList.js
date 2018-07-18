import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import selectExpenses from "../redux/selectors/expensesfilter";

export const ExpenseList = props => (
	<div>
		{props.expenses.length === 0 ? (
			<p>No expenses</p>
		) : (
			(<h1> Expense List</h1>,
			(
				<ul className="collection">
					{props.expenses.map(expense => (
						<ExpenseListItem
							key={expense.id}
							{...expense}
						/>
					))}
				</ul>
			))
		)}
	</div>
);

const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
