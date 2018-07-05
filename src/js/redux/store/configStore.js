import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducers from '../reducers/expensesReducer';
import filterReducers from '../reducers/filtersReducers';
import thunk from 'redux-thunk';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducers,
			filters: filterReducers
		}),
		composeEnhancers(applyMiddleware(thunk))
		// window.__REDUX_DEVTOOLS_EXTENSION__ &&
		// 	window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};
