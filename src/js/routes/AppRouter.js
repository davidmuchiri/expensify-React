import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../React-components/ExpenseDashboardPage';
import AddExpensePage from '../React-components/AddExpensePage';
import EditExpensePage from '../React-components/EditExpensePage';
import NotfoundPage from '../React-components/NotFoundPage';
import LoginPage from '../React-components/LoginPage';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute
					path="/"
					component={LoginPage}
					exact={true}
				/>
				<PrivateRoute
					path="/dashboard"
					component={ExpenseDashboardPage}
				/>
				<PrivateRoute
					path="/create"
					component={AddExpensePage}
				/>
				<PrivateRoute
					path="/edit/:id"
					component={EditExpensePage}
				/>
				<Route component={NotfoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
