export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = 'SET_SUCCESS';

export interface IUser {
  firstName: string;
  email: string;
  id: string;
  createdAt: any;
}

export interface IAuthState {
  user: IUser | null;
  authenticated: boolean;
  loading: boolean;
  error: string;
  needVerification: boolean;
  success: string;
}

export interface ISignUpData {
  firstName: string;
  email: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

// Actions

interface ISetUserAction {
  type: typeof SET_USER;
  payload: IUser;
}

interface ISetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface ISignOutAction {
  type: typeof SIGN_OUT;
}

interface ISetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

interface INeedVerificationAction {
  type: typeof NEED_VERIFICATION;
}

interface ISetSuccessAction {
  type: typeof SET_SUCCESS;
  payload: string;
}

export type AuthAction = ISetUserAction | ISetLoadingAction | ISignOutAction | ISetErrorAction | INeedVerificationAction | ISetSuccessAction;