import database from '../../../db/firebase';

export const addExpense = expenses => ({ type: 'ADD_EXPENSE', expenses });
export const startAddExpense = (expenseData = {}) => {
	return dispatch => {
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;

		const expense = {
			description,
			note,
			amount,
			createdAt
		};

		return database
			.ref('expenses')
			.push(expense)
			.then(ref => {
				dispatch(addExpense({ id: ref.key, ...expense }));
			})
			.catch(err =>
				console.log('could not add data due to: ', err)
			);
	};
};

export const removeExpense = ({ id } = {}) => ({ type: 'REMOVE_EXPENSE', id });
export const startRemoveExpense = ({ id } = {}) => {
	return dispatch => {
		return database
			.ref(`expenses/${id}`)
			.remove()
			.then(() => dispatch(removeExpense({ id })))
			.catch(err =>
				console.log('could not remove data due to: ', err)
			);
	};
};

//SET_EXPENSES
export const setExpenses = expenses => ({ type: 'SET_EXPENSES', expenses });
export const startSetExpenses = () => {
	return dispatch => {
		return database
			.ref('expenses')
			.once('value')
			.then(snapshot => {
				const expenses = [];
				snapshot.forEach(childSnapshot => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});
				dispatch(setExpenses(expenses));
			})
			.catch(err =>
				console.log('could not fetch data due to: ', err)
			);
	};
};

export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});
export const startEditExpense = (id, updates) => {
	return dispatch => {
		return database
			.ref(`expenses/${id}`)
			.update(updates)
			.then(() => dispatch(editExpense(id, updates)))
			.catch(err =>
				console.log('could not update data due to: ', err)
			);
	};
};

/**
 * @description how it currently works
 * component calls action generator
 * action generator returns object
 * component dispatches object
 * redux store changes
 */

/**
 * @description how it will work
 * component calls action generator
 * action generator returns function
 * component dispatches function
 * function runs (has the ability to dispatch other actios and do whatever it wants)
 */

/**
 * @description before
 * export const addExpense = ({
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
 */
