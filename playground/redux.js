import { createStore } from 'redux';

/**
 * @description ACTIONS
 * actions are payloads of information that send data from your application to your store they are sent to the store using
 * @function store.dispatch()
 */
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT_COUNT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT_COUNT',
	decrementBy
});

const set = ({ count = 1 } = {}) => ({ type: 'SET', count });

const reset = () => ({ type: 'RESET_COUNT' });

/**
 * @description REDUCERS
 *  reducers specify how the application state changes in response to actions sent to the store.
 * reducers are pure functions
 * output determined by input
 * never change state or action
 */
const countReducer = (curState = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT_COUNT':
			const incrementBy =
				typeof action.incrementBy === 'number'
					? action.incrementBy
					: 1;
			return { count: curState.count + incrementBy };
		case 'RESET_COUNT':
			return { count: 0 };
		case 'DECREMENT_COUNT':
			const decrementBy =
				typeof action.decrementBy === 'number'
					? action.decrementBy
					: 1;
			return { count: curState.count - decrementBy };
		case 'SET':
			return { count: action.count };
		default:
			return curState;
	}
};

/**
 * @description CREATESTORE
 * @function createStore() takes in a reducer
 */

const store = createStore(countReducer);

const unSubscribe = store.subscribe(() => console.log(store.getState()));

//i'd like to increment the count
//dispatch function  allows us to send of an action object to the store

for (let i = 0; i <= 3; i++) {
	store.dispatch(incrementCount({ incrementBy: 5 }));
}

for (let i = 0; i <= 1; i++) {
	for (let k = 0; k <= 1; k++) {
		store.dispatch(decrementCount({ decrementBy: 2 }));
	}
}

//i'd like to reset count to zero
store.dispatch(reset());

store.dispatch(set({ count: 101 }));
