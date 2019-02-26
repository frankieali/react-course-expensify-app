const selectExpensesTotal = (expenses) => {
  return expenses.reduce((acc,expense) => acc + expense.amount, 0);
}

export default selectExpensesTotal;