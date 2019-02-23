import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const currentState = {
  text: 'Bill',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

test('setup default filter values',() => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('sort by amount filter',() => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY',
    sortBy: 'amount'
  });
  expect(state.sortBy).toBe('amount');
});

test('sort by date filter',() => {
  const state = filtersReducer(currentState, {
    type: 'SORT_BY',
    sortBy: 'date'
  });
  expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
  const state = filtersReducer(currentState, {
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  });
  expect(state.text).toBe('bill');
});

test('set start date filter', () => {
  const startDate = moment();
  const state = filtersReducer(currentState, {
    type: 'SET_START_DATE',
    startDate
  });
  expect(state.startDate).toEqual(startDate);
});

// should set endDate
test('set end date filter', () => {
  const endDate = moment().add(7, 'days');
  const state = filtersReducer(currentState, {
    type: 'SET_END_DATE',
    endDate
  });
  expect(state.endDate).toEqual(endDate);
});