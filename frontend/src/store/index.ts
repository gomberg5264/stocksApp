import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './rootReducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// const middlewares = [logger];

const persistConfig = {
  key: 'authType',
  storage,
  whitelist: ['list'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middlewares,thunk)),
// )

export type RootState = ReturnType<typeof rootReducer>;

// export default store;
