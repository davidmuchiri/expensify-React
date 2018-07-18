import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
const now = moment();

export default class ExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : "",
			note: props.expense ? props.expense.note : "",
			amount: props.expense ? props.expense.amount.toString() : "",
			createdAt: props.expense
				? moment(props.expense.createdAt)
				: moment(),
			calenderFocused: false,
			error: "",
			buttonText: props.expense ? "Update Expense" : "Add Expense"
		};
	}

	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};
	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onAmountChange = e => {
		const amount = e.target.value;
		if (!amount || String(amount).match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }));
	};

	onSubmit = e => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			let error = "Please provide description and amount";
			this.setState(() => ({ error }));
		} else {
			this.setState(() => ({ error: "" }));
			console.log("submitted");
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount),
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};
	onRemove = e => {
		e.preventDefault();
		this.props.onRemove();
	};

	render() {
		return (
			<div className="expenseForm">
				<form
					className="expenseForm__form"
					onSubmit={this.onSubmit}>
					{this.state.error && (
						<p className="error">{this.state.error}</p>
					)}
					<div className="expenseForm__primary">
						<div className="form_control">
							<label
								htmlFor="description"
								className="expenseForm__label">
								description
							</label>
							<input
								id="description"
								type="text"
								placeholder="Enter a Description..."
								className="expenseForm__input"
								autoFocus
								value={this.state.description}
								onChange={
									this.onDescriptionChange
								}
							/>
						</div>
						<div className="form_control">
							<label
								htmlFor="amount"
								className="expenseForm__label">
								Amount
							</label>
							<input
								id="amount"
								type="text"
								value={this.state.amount}
								placeholder="Enter an Amount..."
								className="expenseForm__input"
								onChange={this.onAmountChange}
							/>
						</div>
					</div>
					<div className="form_control">
						<label className="expenseForm__label">
							Pick a date
						</label>
						<SingleDatePicker
							date={this.state.createdAt}
							onDateChange={this.onDateChange}
							focused={this.state.calenderFocused}
							onFocusChange={this.onFocusChange}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>
					<textarea
						placeholder="Add a note for expense (optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
						className="expenseForm__textarea"
					/>
					<div className="expenseForm__buttons">
						<button className="btn expenseForm__btn">
							{this.state.buttonText}
						</button>
						{this.state.buttonText ===
							"Update Expense" && (
							<button
								className="btn btn__remove expenseForm__btn "
								onClick={this.onRemove}>
								Remove Expense
							</button>
						)}
					</div>
				</form>
			</div>
		);
	}
}
