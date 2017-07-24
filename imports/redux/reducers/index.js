import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { route } from './route.js';
import { article } from './article.js';
import { counter } from './counter.js';

const reducers = combineReducers({
  routing: routerReducer,
  route,
  article,
  counter,
});

export default reducers;
