const a = 2323;
export default a;

import { action } from "typesafe-actions";

// use typescript enum rather than action constants
export enum actionTypes {
  ADD = "ADD",
  DELETE = "DELETE"
}

export const addList = (item: any) => {
  return {
    type: actionTypes.ADD,
    payload: item
  }
} 

export const deleteList = (idx: any) => {
  return {
    type: actionTypes.DELETE,
    payload: idx
  }
} 

export const todoActions = {
  add: (item: any) => action(actionTypes.ADD, item),
  delete: (idx: number) => action(actionTypes.DELETE, idx)
};




































// import {
//    IStockItemList, ADD_STOCKLIST, StockListAction, GET_STOCKLIST,
//   GET_STOCKLIST_BY_ID, SET_STOCKLISTID_TO_DELETE, DELETE_STOCKLIST,
//   IStockItem, ADD_STOCK,IStocks
// } from '../types';

// export const addStock = (list: IStocks): StockListAction => {
//   return {
//     type: ADD_STOCK,
//     payload: list
//   }
// }

// export const getStock = (): StockListAction => {
//   return {
//     type: GET_STOCKLIST
//   }
// }

// export const getStockById = (symbol: string): StockListAction => {
//   return {
//     type: GET_STOCKLIST_BY_ID,
//     payload: symbol
//   }
// }

// export const setStockIdToDelete = (symbol: string): StockListAction => {
//   return {
//     type: SET_STOCKLISTID_TO_DELETE,
//     payload: symbol
//   }
// }

// export const deleteStock = (symbol: string): StockListAction => {
//   return {
//     type: DELETE_STOCKLIST,
//     payload: symbol
//   }
// }


// export const addStockList = (stock: IStockItem, list: IStocks): StockListAction => {
//   return {
//     type: ADD_STOCKLIST,
//     payload: {
//       stock,
//       list
//     }
//   }
// }