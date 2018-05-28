import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
	<header>
		<h1>Expensify</h1>
		<button>
			<NavLink to="/" activeClassName="is-active" exact={true}>
				Dasboard
			</NavLink>
		</button>
		<button>
			<NavLink to="/create" activeClassName="is-active">
				create
			</NavLink>
		</button>
		<button>
			<NavLink to="/help" activeClassName="is-active">
				Help
			</NavLink>
		</button>
	</header>
);
export default Header;
