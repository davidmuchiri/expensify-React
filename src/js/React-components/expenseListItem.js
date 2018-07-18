import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import FaEdit from "react-icons/lib/md/edit";

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
	<li className="collection__item">
		<div className="collection__item--primary">
			<h5 className="description">{description}</h5>
			<p className="amount">
				Amount: {numeral(amount).format("$0,0.00")}
			</p>
			{!!note && <p className="note"> {note}</p>}
		</div>

		<div className="collection__item--secondary">
			<Link to={`/edit/${id}`}>
				<FaEdit className="icon icon__edit" />
			</Link>
			<p className="collection__item--secondary__text">
				{moment(createdAt).format("MMMM Do, YYYY")}
			</p>
		</div>
	</li>
);

export default ExpenseListItem;
