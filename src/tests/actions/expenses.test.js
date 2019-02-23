import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('add expense action object with provided values',() => {
  const expenseDate = {
    description: "Coffee",
    note: "Extra Large",
    amount: 2500,
    createdAt: 1000
  };
  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDate,
      id: expect.any(String)
    }
  });
});

test('add expense action object with default values',() => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});

test('edit expense action object',() => {
  const action = editExpense('abc123',{description:"Test Description Edit"});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      description: "Test Description Edit"
    }
  });
});

test('remove expense action object',() => {
  const action = removeExpense({id: 'abc123'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});