//Higher order components a component that renders another component
//reuse computed
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = props => (
	<div>
		<h1>info</h1>
		<p>this info is: {prop.info}</p>
	</div>
);

const withAdminWarning = WrappedComponent => {
	return props => {
		<div>
			{props.isAdmin && (
				<p>This is private info, please dont share</p>
			)}
			<WrappedComponent {...props} />
		</div>;
	};
};
const requireAuthentication = WrappedComponent => {
	return props => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>Please login to view the info</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
	<AuthInfo isAuthenticated={false} info="there are the details" />,
	document.getElementById('app')
);
