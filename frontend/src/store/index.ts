import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './rootReducer';
import logger from 'redux-logger';


const middlewares = [logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares,thunk)),
)



export type RootState = ReturnType<typeof rootReducer>;

export default store;
