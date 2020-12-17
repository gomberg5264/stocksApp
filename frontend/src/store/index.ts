import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState,saveState } from './localStorage'; 
import authReducer from './reducers/authReducer';
import { todoReducer } from './reducers/listReducer';

const persistedState = loadState();

function saveToLocalStorage(state:any) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
const serializedState = localStorage.getItem('state');
if (serializedState === null) return undefined;
 return JSON.parse(serializedState);
}

const presistedState = loadFromLocalStorage();

export const rootReducer = combineReducers({
  auth: authReducer,
  list: todoReducer,
});

const store = createStore(
  rootReducer,
  presistedState,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type RootState = ReturnType<typeof rootReducer>;
store.subscribe(() => saveToLocalStorage(store.getState()));
// store.subscribe(() => saveState({ list: store.getState() }))

export default store;
