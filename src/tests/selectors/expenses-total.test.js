import { expenses } from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('add up total expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(24195);
});

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('correctly add up a single expenses', () => {
  const result = selectExpensesTotal([expenses[1]]);
  expect(result).toBe(19500);
});