/**
 *
 * @param {*} expenses
 * @description this function takes in an array, maps it and returns an array of amounts
 * the array is then reduced to get the TotalAmount with is then returned
 */

const getExpensesTotal = expenses => {
	if (!expenses || expenses.length === 0) {
		return 0;
	} else {
		// const amountArray = expenses.map(expense => expense.amount);
		// const reducer = (accumulator, currentValue) =>
		// 	accumulator + currentValue;
		// const TotalAmount = amountArray.reduce(reducer);
		// return TotalAmount;

		return expenses
			.map(expense => expense.amount)
			.reduce((sum, value) => sum + value, 0);
	}
};

export default getExpensesTotal;
