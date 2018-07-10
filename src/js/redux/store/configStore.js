import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducers from '../reducers/expensesReducer';
import filterReducers from '../reducers/filtersReducers';
import authReducer from '../reducers/auth';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducers,
			filters: filterReducers,
			auth: authReducer
		}),
		composeEnhancers(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
	return store;
};
