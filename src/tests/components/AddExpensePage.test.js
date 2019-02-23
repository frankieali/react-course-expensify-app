import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expenses } from '../fixtures/expenses';

let addExpenseSpy, historySpy, wrapper;

beforeEach(() => {
  addExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} history={historySpy} />);
});

test('render add expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});