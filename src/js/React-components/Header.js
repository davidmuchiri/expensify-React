import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../redux/actions/auth";
import FaLogout from "react-icons/lib/md/exit-to-app";
export const Header = ({ startLogout }) => (
	<header className="header">
		<div className="container">
			<Link to="/dashboard" className="header__logo">
				<h1 className="header__logo--title">Expensify</h1>
			</Link>
			<button onClick={startLogout} className="btn btn__logout">
				Logout
				<FaLogout className="icon icon__signout" />
			</button>
		</div>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);
