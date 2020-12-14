export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = 'SET_SUCCESS';
/* ********************************************************************************************* To-Do*/
export const ADD_STOCK = 'ADD_STOCK';
export const GET_STOCK = 'GET_STOCK';
export const DELETE_STOCK = 'DELETE_STOCK';
export const ADD_STOCKLIST = 'ADD_STOCKLIST';
export const GET_STOCKLIST = 'GET_STOCKLIST';
export const GET_STOCKLIST_BY_ID = 'GET_STOCKLIST_BY_ID';
export const DELETE_STOCKLIST = 'DELETE_STOCKLIST';
export const SET_STOCKLISTID_TO_DELETE = 'SET_STOCKLISTID_TO_DELETE';
/* ******************************************************************************************/
export const GET_LISTS = 'GET_LISTS';
export const GET_LIST_BY_ID = 'GET_LIST_BY_ID';
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const SET_LISTID_TO_DELETE = 'SET_LISTID_TO_DELETE';
export const SET_LIST_TO_EDIT = 'SET_LIST_TO_EDIT';
export const SET_SELECTED_LIST = 'SET_SELECTED_LIST';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASK_TO_DELETE = 'SET_TASK_TO_DELETE';
export const UNSET_TASK_TO_DELETE = 'UNSET_TASK_TO_DELETE';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SET_TASK_TO_EDIT = 'SET_TASK_TO_EDIT';
export const UNSET_TASK_TO_EDIT = 'UNSET_TASK_TO_EDIT';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';
/******************************************************************************************************* */      

/* To-Do Interfaces *******************************************************************************************************/

export interface ITask {
  name: string;
  id: string;
  completed: boolean;
}

export interface IList {
  name: string;
  id: string;
  tasks: ITask[];
}

export interface ILists {
  [id: string]: IList
}

/// ///// //// // / // / / / / /


export interface IStockItem {
  cAct: string;
	dayEndClose: string;
	high: string;
	iislPercChange: number;
	iislPtsChange: number;
	low: string;
	ltP: string;
	mPC: string;
	mVal: string;
	ntP: string;
	open: string;
	per: string;
	previousClose: string;
	ptsC: number;
	symbol: string;
	trdVol: string;
	trdVolM: string;
	wkhi: string;
	wkhicm_adj: string;
	wklo: string;
	wklocm_adj: string;
	xDt: string;
	yPC: number;
}

export interface IStocks {
  symbol: string;
  stocks: IStockItem[];
}


export interface IStockItemList {
  [symbol: string]: IStockItem;
}


// /////////////////////////////////////////// Actions

interface IAddStockItemAction {
  type: typeof ADD_STOCK;
  payload: IStocks;
}

interface IGetStockAction {
  type: typeof GET_STOCK;
}

interface IGetStockByIdAction {
  type: typeof GET_STOCKLIST_BY_ID;
  payload: string;
}

interface IDeleteStockAction {
  type: typeof DELETE_STOCK;
  payload: string;
}

interface IAddStocklistAction {
  type: typeof ADD_STOCKLIST;
  payload: {
    stock: IStockItem,
    list: IStockItemList
  };
}

interface IGetStockListAction {
  type: typeof GET_STOCKLIST;
}

interface ISetStockListIdToDeleteAction {
  type: typeof SET_STOCKLISTID_TO_DELETE;
  payload: string;
}

interface IDeleteStockListAction {
  type: typeof DELETE_STOCKLIST;
  payload: string;
}

export type StockListAction = IAddStockItemAction | IGetStockAction | IGetStockByIdAction |
  IDeleteStockAction | IAddStocklistAction | IGetStockListAction | IDeleteStockListAction | ISetStockListIdToDeleteAction;

export interface IStockListState {
  lists: IStockItemList;
  listIdToDelete: string;
  listToEdit: IStockItemList | null;
  listById: IStockItemList | null;
  selectedList: IStockItemList | null;
  taskToDelete: {
    task: IStockItem;
    list: IStockItemList;
  } | null;
  taskToEdit: {
    task: IStockItem;
    list: IStockItemList;
  } | null;
}



///////////////////////////////////////////////////////////////////// and more

interface IAddListAction {
  type: typeof ADD_LIST;
  payload: IList;
} 

interface IGetListsAction {
  type: typeof GET_LISTS;
}

interface IGetListByIdAction {
  type: typeof GET_LIST_BY_ID;
  payload: string;
}

interface ISetListIdToDeleteAction {
  type: typeof SET_LISTID_TO_DELETE;
  payload: string;
}

interface ISetListToEditAction {
  type: typeof SET_LIST_TO_EDIT;
  payload: string;
}

interface IDeleteListAction {
  type: typeof DELETE_LIST;
  payload: string;
}

interface IUpdateListAction {
  type: typeof UPDATE_LIST;
  payload: {
    id: string;
    name: string;
  }
}

interface ISetSelectedListAction {
  type: typeof SET_SELECTED_LIST;
  payload: string;
}

interface IAddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    task: ITask;
    list: IList;
  }
}

interface IDeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: {
    task: ITask;
    list: IList;
  }
}

interface ISetTaskToDeleteAction {
  type: typeof SET_TASK_TO_DELETE;
  payload: {
    task: ITask;
    list: IList;
  }
}

interface IUnsetTaskToDeleteAction {
  type: typeof UNSET_TASK_TO_DELETE;
}

interface IEditTaskAction {
  type: typeof UPDATE_TASK;
  payload: {
    taskId: string;
    taskName: string;
    taskState: boolean;
    list: IList;
  }
}

interface ISetTaskToEditAction {
  type: typeof SET_TASK_TO_EDIT;
  payload: {
    task: ITask;
    list: IList;
  }
}

interface IUnsetTaskToEditAction {
  type: typeof UNSET_TASK_TO_EDIT;
}

interface ISetNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: {
    msg: string;
    type: string;
  }
}

export type ListsAction = IAddListAction | IGetListsAction | IGetListByIdAction | ISetListIdToDeleteAction | ISetListToEditAction | IDeleteListAction | IUpdateListAction | ISetSelectedListAction | IAddTaskAction | IDeleteTaskAction | ISetTaskToDeleteAction | IUnsetTaskToDeleteAction | IEditTaskAction | ISetTaskToEditAction | IUnsetTaskToEditAction;

export type NotificationAction = ISetNotificationAction;

export interface IListState {
  lists: ILists;
  listIdToDelete: string;
  listToEdit: IList | null;
  listById: IList | null;
  selectedList: IList | null;
  taskToDelete: {
    task: ITask;
    list: IList;
  } | null;
  taskToEdit: {
    task: ITask;
    list: IList;
  } | null;
}

export interface INotificationState {
  message: string;
  type: string;
}

/* To-Do                          * **********************************************************************************  */



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