import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import { todoReducer } from './reducers/listReducer';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const middlewares = [logger];

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['list']
}

export const rootReducer = combineReducers({
  auth: authReducer,
  list: todoReducer,
});

export const persisted = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persisted,
  composeWithDevTools(applyMiddleware(...middlewares,thunk)),
)

export type RootState = ReturnType<typeof rootReducer>;

export default store;
