import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import { todoReducer } from './reducers/listReducer';
// import listReducer from './reducers/listReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  list: todoReducer
  // list: listReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>;

export default store;
