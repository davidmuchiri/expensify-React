import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/auth";
export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<div className="box-layout__header">
				<h1 className="primary--title box-layout__title">
					Expensify
				</h1>
				<p className="sub--title box-layout__subtitle">
					it's time to get your expenses under control
				</p>
			</div>

			<button
				className="btn--Login box-layout__btn"
				onClick={startLogin}>
				Login with Google
			</button>
		</div>
	</div>
);
const mapDispatchToProps = dispatch => ({
	startLogin: () => dispatch(startLogin())
});
export default connect(
	undefined,
	mapDispatchToProps
)(LoginPage);
