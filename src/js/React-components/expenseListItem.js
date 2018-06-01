import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions/expenses';

const ExpenseListItem = ({
	dispatch,
	id,
	description,
	note,
	amount,
	createdAt
}) => (
	<ul>
		<li>
			<h5>description: {description}</h5>
			{!!note && <p>note: {note}</p>}
			<p>amount: {amount}</p>
			<p>created at: {createdAt}</p>
			<button
				onClick={() => {
					dispatch(removeExpense({ id }));
				}}>
				Remove
			</button>
		</li>
	</ul>
);

export default connect()(ExpenseListItem);
