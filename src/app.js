import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpense from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(setTextFilter('water'))

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpense)

// console.log(store.getState());

ReactDOM.render(<AppRouters />, document.getElementById('app'));
