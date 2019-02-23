import moment from 'moment';
import { setStartDate, setEndDate, sortBy, setTextFilter } from '../../actions/filters';

test('set start date action object',() => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('set end date action object',() => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('sort by data action object', () => {
  const value = "date";
  const action = sortBy(value);
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: value
  });
});

test('sort by data action object', () => {
  const value = "amount";
  const action = sortBy(value);
  expect(action).toEqual({
    type: 'SORT_BY',
    sortBy: value
  });
});

test('filter by text value using default values action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('filter by text value action object', () => {
  const text = 'bill';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});