import expensesReducer from '../../redux/reducers/expensesReducer';
import expenses from '../fixtures/testData';
import moment from 'moment';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});
test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is invalid', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 232
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'Laptop',
		note: '',
		amount: 3000,
		createdAt: moment(0)
			.add(5, 'days')
			.valueOf()
	};
	const action = {
		type: 'ADD_EXPENSE',
		expenses: expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});
test('should edit an expense', () => {
	const updates = {
		description: 'Desktop'
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: '3',
		updates
	};
	const state = expensesReducer(expenses, action);
	expect(state[2].description).toContain(updates.description);
});
test('should not edit an expense if id not found', () => {
	const updates = {
		description: 'desktop',
		note: 'bought a desktop',
		amount: 4000
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: '5',
		updates
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
