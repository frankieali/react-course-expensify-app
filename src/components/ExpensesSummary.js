import React from 'react';
import { connect } from 'react-redux'; 
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      Viewing <strong>{expenseCount}</strong> {expenseWord} totalling <strong>{numeral(expensesTotal / 100).format('$0,0.00')}</strong>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary)
