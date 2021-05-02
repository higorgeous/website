import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { isBrowser } from '@/utils';

import layoutReducer from '../reducers/Layout';

const initialState = {};

const middleware = [thunk];

const reducers: any = combineReducers({
  layout: layoutReducer,
});

const composeEnhancers =
  ((isBrowser && (window as any))
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
