import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../redux/actions/filters';

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

const ExpenseListFilters = props => (
	<div>
		<input
			type="text"
			value={props.filters.text}
			onChange={e => {
				props.dispatch(setTextFilter(e.target.value));
			}}
		/>
	</div>
);

export default connect(mapStateToProps)(ExpenseListFilters);
