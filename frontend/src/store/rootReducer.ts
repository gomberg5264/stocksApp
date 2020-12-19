import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
import authReducer from './reducers/authReducer';
import reducer from './reducers/newListReducer';

// export const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['list']
// }

export const rootReducer = combineReducers({
  auth: authReducer,
  list: reducer
});


// export default persistReducer(persistConfig, rootReducer);