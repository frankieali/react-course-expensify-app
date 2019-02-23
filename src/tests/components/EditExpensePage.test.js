import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses } from '../fixtures/expenses';

// refactor EditExpensePage to be a class based component
// setup mapDispatchToProps - editExpense and removeExpense
// should render EditExpensePage - snapshop
// should handle editExpense - spies
// should handle removeExpense - spies
// use beforeEach for common variables

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpenseSpy} 
      removeExpense={removeExpenseSpy} 
      history={historySpy} 
      expense={expenses[2]} 
    />
  );
});

test('render edit expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handle onSubmit', () => {
  wrapper.setProps({expense: {id:expenses[0].id}});
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('handle remove item', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({id: expenses[2].id});
});