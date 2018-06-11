import {
	addExpense,
	editExpense,
	removeExpense
} from '../../redux/actions/expenses';

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
	const expenseData = {
		description: 'rent',
		amount: 300,
		note: 'rental',
		createdAt: 1000
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expenses: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expenses: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
