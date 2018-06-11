import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
	<ul>
		<li>
			<h5>description: {description}</h5>
			{!!note && <p>note: {note}</p>}
			<p>amount: {amount}</p>
			<p>
				created at:{' '}
				{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
			</p>
			<Link to={`/edit/${id}`}>
				<p>Edit</p>
			</Link>
		</li>
	</ul>
);

export default ExpenseListItem;
