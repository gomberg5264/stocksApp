import React, {useEffect, useState } from 'react';
import './firebase/config'
import './App.css'
// import 'bulma/css/bulma.min.css'
import ThemeProvider from './components/theme/Theme';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import {Header} from './components/sections/Header';
import {SignUp} from './components/pages/SignUp';
import {SignIn} from './components/pages/SignIn';
import {ForgotPassword} from './components/pages/ForgotPassword';
import {Homepage} from './components/pages/HomePage';
import {Dashboard} from './components/pages/Dashboard';
import {PrivateRoute} from './components/auth/PrivateRoute';
import {PublicRoute} from './components/auth/PublicRoute';
import {Loader} from './components/UI/Loader';
import firebase from './firebase/config';
import { getUserById, setLoading, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  const [users, setUserList] = useState();

  useEffect(() => {
    // Use [] as second argument in useEffect for not rendering each time
    axios.get('http://localhost:4000/nse/get_index_stocks?symbol=nifty')
    .then((response) => {
        console.log(response.data);
        setUserList( response.data );
    });
  }, []);
  console.log(users);

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if(!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if(loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Switch>
          <PublicRoute path="/" component={Homepage} exact={true} />
          <PublicRoute path="/signup" component={SignUp} exact={true} />
          <PublicRoute path="/signin" component={SignIn} exact={true} />
          <PublicRoute path="/forgot-password" component={ForgotPassword} exact={true} />
          <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;


// import Signup from './views/Auth/components/Signup';
// const options = {
//   // headers: {
//   //   'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
//   //   'x-rapidapi-key': '5295380425msh8f4efac1b3a4577p19cb1fjsn1025dd12f63c',
    
//   // },
//   method: 'GET',
//   // params: {symbol: 'AMZN', interval: '1day', outputsize: '30', format: 'json'},
//   url: 'http://localhost:4000/nse/get_index_stocks?symbol=nifty',

// };

// axios.get<IOptions[]>(options).then(function (response) {
//   console.log(response.data);
//   console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// console.log()
