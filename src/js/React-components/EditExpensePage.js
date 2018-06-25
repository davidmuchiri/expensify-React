import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../redux/actions/expenses';
import { removeExpense } from '../redux/actions/expenses';

export class EditExpensePage extends Component {
	onSubmit = expense => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onRemove = () => {
		this.props.removeExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm
					expense={this.props.expense}
					onSubmit={this.onSubmit}
				/>
				<button onClick={this.onRemove}>Remove Expense</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => ({
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	removeExpense: data => dispatch(removeExpense(data))
});

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(
		expense => expense.id === props.match.params.id
	)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditExpensePage);
