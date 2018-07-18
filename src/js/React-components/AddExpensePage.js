import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FaBack from "react-icons/lib/md/arrow-back";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../redux/actions/expenses";

export class AddExpensePage extends Component {
	onSubmit = expense => {
		this.props.startAddExpense(expense);
		this.props.history.push("/dashboard");
	};
	render() {
		return (
			<div className="addExpensePage container">
				<div className="addExpensepage__panel">
					<Link
						to="/dashboard"
						className="addExpensepage__panel--link">
						<FaBack className="icon" />
					</Link>
					<h1 className="addExpensepage__title">
						Add expense page
					</h1>
				</div>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(
	undefined,
	mapDispatchToProps
)(AddExpensePage);
