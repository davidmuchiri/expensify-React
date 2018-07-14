import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../redux/actions/expenses';

export class AddExpensePage extends Component {
	onSubmit = expense => {
		this.props.startAddExpense(expense);
		this.props.history.push('/dashboard');
	};
	render() {
		return (
			<div>
				<h1>Add expense page</h1>
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
