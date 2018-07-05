import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/redux/store/configStore';
import { addExpense } from './js/redux/actions/expenses';
import getVisibleExpense from './js/redux/selectors/expensesfilter';
import 'normalize.css/normalize.css';
import AppRouter from './js/routes/AppRouter';
import './scss/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './db/firebase';

const store = configureStore();

store.dispatch(
	addExpense({
		description: 'water bill',
		amount: 400,
		createdAt: new Date().getTime()
	})
);
store.dispatch(
	addExpense({
		description: 'gas bill',
		amount: 1500,
		createdAt: 1000
	})
);
store.dispatch(
	addExpense({
		description: 'rent bill',
		amount: 4000,
		createdAt: new Date().getTime()
	})
);

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));
