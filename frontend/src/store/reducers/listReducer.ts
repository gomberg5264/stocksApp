const a = 2323;
export default a;

// import * as MyTypes from "MyTypes";
import { actionTypes, todoActions } from "../actions/listAction";
import {StateType, ActionType } from "typesafe-actions";
// 1 for store, 1 for reducer, 1 for action creators
// export type ReducerState = StateType<typeof import("../reducers").default>;
export type RootAction = ActionType<typeof todoActions>;
import { rootReducer } from '../index';
export type ReducerState = StateType<typeof rootReducer>;

interface IStock {
  list: any
  // cAct: string;
	// dayEndClose: string;
	// high: string;
	// iislPercChange: number;
	// iislPtsChange: number;
	// low: string;
	// ltP: string;
	// mPC: string;
	// mVal: string;
	// ntP: string;
	// open: string;
	// per: string;
	// previousClose: string;
	// ptsC: number;
	// symbol: string;
	// trdVol: string;
	// trdVolM: string;
	// wkhi: string;
	// wkhicm_adj: string;
	// wklo: string;
	// wklocm_adj: string;
	// xDt: string;
	// yPC: number;
}

interface IStocksModel {
  list: IStock[];
}

export const initialState: IStocksModel = {
  list: []
};

export const todoReducer = (state: IStocksModel = initialState, action:  RootAction) => {
  switch (action.type) {
    case actionTypes.ADD: {
      if (state.list.length < 10) {
        return {
          ...state,
          list: [...state.list, action.payload]
        }
      }
      else {
        return {
          ...state,
        }
      }
    }
      
    case actionTypes.DELETE: {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {
        ...state,
        list: newList
      };
    }
    default:
      return state;
  }
};















// import {IStockListState, StockListAction,IStockItemList, IStockItem, ADD_STOCK } from '../types';

// const initialState: IStockListState = {
//   lists: { },
//   listIdToDelete: '',
//   listToEdit: null,
//   listById: null,
//   selectedList: null,
//   taskToDelete:  null,
//   taskToEdit: null,
// }

// // Helper Function

// const getListFromLS = (): IStockItemList => {
//   if (localStorage.getItem('stock_list')) {
//     return JSON.parse(localStorage.getItem('stock_list') || '{}');
//   }
//   return {};
// }

// const saveStockListToLS = (stockList: IStockItemList) => {
//   localStorage.setItem('stocK_list', JSON.stringify(stockList));
// }

// export default (state = initialState, action: StockListAction): IStockListState => {
//   const listsFromLS = getListFromLS();
  
//   switch (action.type) {
//     case ADD_STOCK:
//       const clonedListsFromLS = { ...listsFromLS };
//       clonedListsFromLS[action.payload.symbol] = action.payload;
    
//     default:
//       return state;
//   }
// }