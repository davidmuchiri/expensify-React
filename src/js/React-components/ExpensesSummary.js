import React from "react";
import getExpensesTotal from "../redux/selectors/selectExpensesTotal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../redux/selectors/expensesfilter";
import numeral from "numeral";
import FaAdd from "react-icons/lib/md/add";

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
	const expenseWord = expensesCount === 1 ? "expense" : "expenses";
	const formattedExpenseTotal = numeral(expensesTotal).format("$0,0.00");

	return (
		<div className="panel">
			<h1 className="panel__heading">
				Viewing{" "}
				<span className="panel__count">{expensesCount}</span>
				{"  "}
				{expenseWord}
				{"  "}
				totalling
				{"  "}
				<span className="panel__total">
					{formattedExpenseTotal}
				</span>
			</h1>
			<Link to="/create" className="btn btn__add">
				<FaAdd className="icon icon__add" />
				Add Expense
			</Link>
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
