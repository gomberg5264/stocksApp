import { actionTypes, todoActions } from "../actions/listAction";
import {StateType, ActionType } from "typesafe-actions";
export type RootAction = ActionType<typeof todoActions>;
import { rootReducer } from '../index';
export type ReducerState = StateType<typeof rootReducer>;

interface IStock {
  list: any
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
       // tslint:disable-next-line
       if (state.list.length > 9) {
        return {
          ...state,
        }
       }
       else {
        let temp = 0;
        /* tslint:disable-next-line */ // @ts-ignore
         for (let i = 0; i < state.list.length; i++) { 
          if (state.list[i] === action.payload) {
            temp = temp + 1;
          }
        }
         if (temp === 0) {
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
    }
    case actionTypes.DELETE: {
      const oldList = [...state.list];
      if (oldList.length < 2) {
        oldList.splice(action.payload, 1);
        const newList = oldList;
        return {
          ...state,
          list: newList
        };
      }
      else
      {
        // tslint:disable-next-line
        for (let i = 0; i < oldList.length; i++) {
          /* tslint:disable-next-line */ // @ts-ignore
          if (oldList[i].symbol === action.payload) {
            /* tslint:disable-next-line */ // @ts-ignore
            oldList.splice(i,1)[0];
          }
        }
        return {
          ...state,
            list: oldList
          };
        }
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