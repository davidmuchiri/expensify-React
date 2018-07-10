import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/redux/store/configStore';
import { startSetExpenses } from './js/redux/actions/expenses';
import { login, logout } from './js/redux/actions/auth';
import getVisibleExpense from './js/redux/selectors/expensesfilter';
import 'normalize.css/normalize.css';
import AppRouter, { history } from './js/routes/AppRouter';
import './scss/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './db/firebase';

const store = configureStore();

// store.dispatch(
// 	startAddExpense({
// 		description: 'water bill',
// 		amount: 400,
// 		createdAt: 40000
// 	})
// );

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.querySelector('#app'));
		hasRendered = true;
	}
};

ReactDOM.render(<p>Loading...</p>, document.querySelector('#app'));

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch(login(user.uid));
		console.log('uid', user.uid);
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
