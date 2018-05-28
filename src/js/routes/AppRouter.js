import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../React-components/Header';
import ExpenseDashboardPage from '../React-components/ExpenseDashboardPage';
import AddExpensePage from '../React-components/AddExpensePage';
import EditExpensePage from '../React-components/EditExpensePage';
import HelpPage from '../React-components/HelpPage';
import NotfoundPage from '../React-components/NotFoundPage';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
					component={ExpenseDashboardPage}
				/>
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotfoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
