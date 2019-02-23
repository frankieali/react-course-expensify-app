import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import moment from 'moment';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import  'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({
  description:'Water Bill',
  amount: 60,
  createdAt: moment().subtract(3, 'days').valueOf()
}));

store.dispatch(addExpense({
  description:'Gas Bill',
  amount: 220,
  createdAt: moment().add(3, 'days').valueOf()
}));

store.dispatch(addExpense({
  description:'Rent',
  amount: 2220,
  createdAt: moment().subtract(6, 'days').valueOf()
}));

// store.dispatch(setTextFilter('gas'));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
