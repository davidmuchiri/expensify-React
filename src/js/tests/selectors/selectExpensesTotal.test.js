import getExpensesTotal from '../../redux/selectors/selectExpensesTotal';
import expenses from '../fixtures/testData';

let totalAmount = 0;
expenses.forEach(expense => (totalAmount += expense.amount));

test('should return 0 if no array is passed', () => {
	const total = getExpensesTotal();
	expect(total).toBe(0);
});

test('should return 0 if empty array is passed', () => {
	const total = getExpensesTotal([]);
	expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
	const total = getExpensesTotal([expenses[0]]);
	expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
	const total = getExpensesTotal(expenses);
	expect(total).toBe(totalAmount);
});
