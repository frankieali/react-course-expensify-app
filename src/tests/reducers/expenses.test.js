import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';

test('set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual([]);
});

test('remove expense by ID', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  });
  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ]);
});

test('should not remove expense if no ID', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  });
  expect(state).toEqual(expenses);
});

test('add an expense', () => {
  const expense = {
    id: '4',
    description: 'Car Payment',
    note: 'Mazda',
    amount: 28900,
    createdAt: moment(0).add(6, 'days').valueOf()
  };
  const state = expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    expense
  });
  expect(state).toEqual([
    ...expenses,
    expense
  ])
});

test('edit an expense', () => {
  const updates = {
    note: 'Winterfresh',
    amount: 295,
    createdAt: moment(0).add(3, 'days').valueOf()
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  });
  expect(state).toEqual([
    {
      ...expenses[0],
      ...updates
    },
    expenses[1],
    expenses[2]
  ]);
});

test('do not edit an expense when id is not found', () => {
  const editedExpense = {
    note: 'Winterfresh',
    amount: 295,
    createdAt: moment(0).add(3, 'days').valueOf()
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: editedExpense
  });
  expect(state).toEqual(expenses);
});