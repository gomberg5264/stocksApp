import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/Index.css';
import { Provider } from 'react-redux'
import App from './App';
import {store} from './store';
// import persistor from './store'
// import {PersistGate} from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';
// const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


