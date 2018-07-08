import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/redux/store/configStore';
import { startSetExpenses } from './js/redux/actions/expenses';
import getVisibleExpense from './js/redux/selectors/expensesfilter';
import 'normalize.css/normalize.css';
import AppRouter from './js/routes/AppRouter';
import './scss/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './db/firebase';

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

ReactDOM.render(<p>Loading...</p>, document.querySelector('#app'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.querySelector('#app'));
});
