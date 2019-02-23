import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextSpy, sortBySpy, startDateSpy, endDateSpy, wrapper;

beforeEach(() => {
  setTextSpy = jest.fn();
  sortBySpy = jest.fn();
  startDateSpy = jest.fn();
  endDateSpy = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextSpy}
    sortBy={sortBySpy}
    setStartDate={startDateSpy}
    setEndDate={endDateSpy}
  />);
});

test('render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('render expense list filters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: { value: altFilters.text }
  });
  expect(setTextSpy).toHaveBeenLastCalledWith(altFilters.text);
});

test('sort by date select change', () => {
  wrapper.find('select').simulate('change', {
    target: { value: altFilters.sortBy }
  });
  expect(sortBySpy).toHaveBeenLastCalledWith(altFilters.sortBy);
});

test('handle date change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: altFilters.startDate, endDate: altFilters.endDate})
  expect(startDateSpy).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(endDateSpy).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('handle date focus change', () => {
  const focus = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(focus)
  expect(wrapper.state('calendarFocused')).toBe(focus);
});