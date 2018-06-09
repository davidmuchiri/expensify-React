import { createStore, combineReducers } from 'redux';
import expensesReducers from '../reducers/expensesReducer';
import filterReducers from '../reducers/filtersReducers';

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducers,
			filters: filterReducers
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};
