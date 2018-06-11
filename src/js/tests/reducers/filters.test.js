import filtersReducer from '../../redux/reducers/filtersReducers';
import moment from 'moment';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};
	const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
	expect(state.sortBy).toBe('date');
});

test('should set text', () => {
	const state = filtersReducer(undefined, {
		type: 'SET_TEXT_FILTER',
		text: 'rent'
	});
	expect(state.text).toBe('rent');
});
test('should set startDate filter', () => {
	const state = filtersReducer(undefined, {
		type: 'SET_START_DATE',
		startDate: 34
	});
	expect(state.startDate).toBe(34);
});
test('should set endDateFilter', () => {
	const state = filtersReducer(undefined, {
		type: 'SET_END_DATE',
		endDate: 344
	});
	expect(state.endDate).toBe(344);
});
