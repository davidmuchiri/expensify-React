import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './js/redux/store/configStore';
import { addExpense } from './js/redux/actions/expenses';
import { setTextFilter } from './js/redux/actions/filters';
import getVisibleExpense from './js/redux/selectors/expensesfilter';
import 'normalize.css/normalize.css';
import AppRouter from './js/routes/AppRouter';
import './scss/styles.scss';

const store = configureStore();

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(
	addExpense({
		description: 'electric bill',
		amount: 400,
		createdAt: new Date().getMilliseconds()
	})
);
store.dispatch(
	addExpense({
		description: 'gas bill',
		amount: 30000,
		createdAt: new Date().getMilliseconds()
	})
);
store.dispatch(setTextFilter('gas'));

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpense);

ReactDOM.render(<AppRouter />, document.querySelector('#app'));
