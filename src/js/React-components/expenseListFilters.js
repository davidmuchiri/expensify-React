import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/initialize";
import FaSearch from "react-icons/lib/md/search";
import FaArrowDown from "react-icons/lib/md/keyboard-arrow-down";
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from "../redux/actions/filters";

export class ExpenseListFilters extends Component {
	state = {
		calendarFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};

	onTextChange = e => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = e => {
		if (e.target.value === "date") {
			this.props.sortByDate();
		} else if (e.target.value == "amount") {
			this.props.sortByAmount();
		}
	};

	render() {
		return (
			<div className="filters">
				<div className="filters__search">
					<input
						type="text"
						value={this.props.filters.text}
						onChange={this.onTextChange}
						placeholder="Search expenses..."
						className="filters__input"
					/>
				</div>
				<div className="filters__dropdown">
					<select
						className="filters__select"
						value={this.props.filters.sortBy}
						onChange={this.onSortChange}>
						<option value="date">Date</option>
						<option value="amount">Amount</option>
					</select>
					<FaArrowDown className="icon icon__arrowDown" />
				</div>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates={true}
					startDateId={"start"}
					endDateId={"end"}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({ filters: state.filters });

const mapDispatchToProps = dispatch => ({
	setTextFilter: text => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: startDate => dispatch(setStartDate(startDate)),
	setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExpenseListFilters);
