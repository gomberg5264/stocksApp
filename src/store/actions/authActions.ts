import { ThunkAction } from 'redux-thunk';

import {
  ISignUpData, AuthAction, SET_USER, IUser, SET_LOADING,
  SIGN_OUT, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS, ISignInData,
} from '../types';
import { RootState } from '..';
import firebase from '../../firebase/config';

// CReate USer
export const signup = (data: ISignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        const userData: IUser = {
          email: data.email,
          firstName: data.firstName,
          id: res.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
        await res.user.sendEmailVerification();
        dispatch({
          type: NEED_VERIFICATION
        })
        dispatch({
          type: SET_USER,
          payload: userData
        })
      }
    }
    catch (err) {
      console.log(err);
      onError();
      dispatch({
        type: SET_ERROR,
        payload: err.message
      })
    }
  }
}

// GEt USer BY ID

export const getUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => { 
  return async dispatch => {
    try {
      const user = await firebase.firestore().collection('users').doc(id).get();
      if (user.exists) {
        const userData = user.data() as IUser;
        dispatch({
          type: SET_USER,
          payload: userData
        })
      }
    }
    catch (err) {
      console.log(err);
    }
  }
}

// SEt LOading

export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => { 
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      payload: value
    })
  }
}

// SIgn In


export const signin = (data: ISignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    }
    catch (err) {
      console.log(err);
      onError();
      dispatch(setError(err.message));
    }
  }
}

// Sign OUt

export const logout = (): ThunkAction<void, RootState, null, AuthAction> => { 
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await firebase.auth().signOut();
      dispatch({
        type: SIGN_OUT
      });
    }
    catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  }
}

// SEr ERror

export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => { 
  return dispatch => {
    dispatch({
      type: SET_ERROR,
      payload: msg
    });
  }
}

// SEt NEed VErification

export const setNeedVerification = (): ThunkAction<void, RootState, null, AuthAction> => { 
  return dispatch => {
    dispatch({
      type: NEED_VERIFICATION
    });
  }
}

// SEt SUccess

export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => { 
  return dispatch => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg
    });
  }
}

// SEnd PAssword REset EMail

export const sendPasswordResetEmail = (email: string, successMsg: string): ThunkAction<void, RootState, null, AuthAction> => { 
  return async dispatch => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      dispatch(setSuccess(successMsg));
    }
    catch (err) {
      console.log(err);
      dispatch(setError(err.message));
    }
  }
}

