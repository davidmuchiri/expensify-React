import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/**
 * @description  EXPENSE ACTIONS
 * ADD_EXPENSE
 * REMOVE_EXPENSE
 * EDIT_EXPENSE
 *@description FILTER actions
 * */

const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expenses: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});
const removeExpense = ({ id } = {}) => ({ type: 'REMOVE_EXPENSE', id });
const editExpense = (id, updates) => ({ type: 'EDIT_EXPENSE', id, updates });
/**
 *
 * @description filter functions
 */
const setTextFilter = (text = '') => ({ type: 'SET_TEXT_FILTER', text });
const sortByDate = () => ({ type: 'SORT_BY_DATE' });
const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });
const setStartDate = startDate => ({ type: 'SET_START_DATE', startDate });
const setEndDate = endDate => ({ type: 'SET_END_DATE', endDate });

const expensesReducersDefaultState = [];
const filterReducersDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

//EXPENSES REDUCERS
const expensesReducers = (state = expensesReducersDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expenses];

		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);

		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					return { ...expense, ...action.updates };
				} else {
					return expense;
				}
			});

		default:
			return state;
	}
};

const filterReducers = (state = filterReducersDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return { ...state, text: action.text };
		case 'SORT_BY_AMOUNT':
			return { ...state, sortBy: 'amount' };
		case 'SORT_BY_DATE':
			return { ...state, sortBy: 'date' };
		case 'SET_START_DATE':
			return { ...state, startDate: action.startDate };
		case 'SET_END_DATE':
			return { ...state, endDate: action.endDate };
		default:
			return state;
	}
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const startDateMatch =
				typeof startDate !== 'number' ||
				expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== 'number' ||
				expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

/**
 * @description createStore
 */
const store = createStore(
	combineReducers({
		expenses: expensesReducers,
		filters: filterReducers
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({ description: 'rent', amount: 500, createdAt: -4000 })
);
const expenseTwo = store.dispatch(
	addExpense({ description: 'food', amount: 200, createdAt: 5000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 300 }));

// store.dispatch(setTextFilter('happens'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(2000));
store.dispatch(setEndDate(4000));

const demoState = {
	expenses: [
		{
			id: '23e3m',
			description: 'January Rent',
			note: 'this was the final payment',
			amount: 45959,
			createdAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', //date or amount
		startDate: undefined,
		endDate: undefined
	}
};
