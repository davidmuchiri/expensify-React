import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense,
	setExpenses,
	startSetExpenses
} from '../../redux/actions/expenses';
import expenses from '../fixtures/testData';
import db from '../../../db/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	db.ref('expenses')
		.set(expensesData)
		.then(() => done());
});

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});
test('should setup editExpense action object', () => {
	const action = editExpense('123abc', {
		id: 'abc',
		description: 'rent',
		amount: 300
	});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: { id: 'abc', description: 'rent', amount: 300 }
	});
});

test('should setup add Expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expenses: expenses[2]
	});
});

test('should add expense to database and store', done => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'this one is better',
		createdAt: 5000
	};
	store.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expenses: {
					id: expect.any(String),
					...expenseData
				}
			});

			//promise chaining.. the success value of the next then call is what is returned by this promise
			return db
				.ref(`expenses/${actions[0].expenses.id}`)
				.once('value');
		})
		.then(snapshot => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});
test('should add expense with defaults to database and store', done => {
	const store = createMockStore({});
	const expenseDefault = {
		description: '',
		note: '',
		amount: 0,
		createdAt: 0
	};
	store.dispatch(startAddExpense({}))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expenses: {
					id: expect.any(String),
					...expenseDefault
				}
			});

			return db
				.ref(`expenses/${actions[0].expenses.id}`)
				.once('value');
		})
		.then(snapshot => {
			expect(snapshot.val()).toEqual(expenseDefault);
			done();
		});
});
test('should setup set expenses action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({ type: 'SET_EXPENSES', expenses });
});

test('should fetch the expenses from firebase', done => {
	const store = createMockStore({});
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});
