const aa = 2323;
export default aa
// import { rootReducer } from '../index';
// import { actionTypes, todoActions } from "../actions/listAction";
// import {StateType, ActionType } from "typesafe-actions";
// export type RootAction = ActionType<typeof todoActions>;
// export type ReducerState = StateType<typeof rootReducer>;

// interface IStock {
//   listItem: {
//     cAct: string;
//     dayEndClose: string;
//     high: string;
//     iislPercChange: number;
//     iislPtsChange: number;
//     low: string;
//     ltP: string;
//     mPC: string;
//     mVal: string;
//     ntP: string;
//     open: string;
//     per: string;
//     previousClose: string;
//     ptsC: number;
//     symbol: string;
//     trdVol: string;
//     trdVolM: string;
//     wkhi: string;
//     wkhicm_adj: string;
//     wklo: string;
//     wklocm_adj: string;
//     xDt: string;
//     yPC: number;
//   }
// }

// interface IStocksModel {
//   list: IStock[];
// }

// export const initialState: IStocksModel = {
//   list: []
//   // list: {
//   //   [
//   //     cAct: '',
//   //     dayEndClose: '',
//   //     high: '',
//   //     iislPercChange: 0,
//   //     iislPtsChange: 0,
//   //     low: '',
//   //     ltP: '',
//   //     mPC: '',
//   //     mVal: '',
//   //     ntP: '',
//   //     open: '',
//   //     per: '',
//   //     previousClose: '',
//   //     ptsC: 0,
//   //     symbol: '',
//   //     trdVol: '',
//   //     trdVolM: '',
//   //     wkhi: '',
//   //     wkhicm_adj: '',
//   //     wklo: '',
//   //     wklocm_adj: '',
//   //     xDt: '',
//   //     yPC: 0,
//   //   ]
//   // }
// };

// export const todoReducer = (state = initialState, action:  any) => {
//   switch (action.type) {
//     case actionTypes.ADD:
//       return {
//         list: [...state.list, action.payload]
//       }
//        // tslint:disable-next-line
//       // state = {
//       //   ...state,
//       //   list: action.payload
//       // }
//       // break;
//       //  if (state.list.length > 9) {
//       //   return {
//       //     ...state,
//       //   }
//       //  }
//       //  else {
//       //   let temp = 0;
//       //   /* tslint:disable-next-line */ // @ts-ignore
//       //    for (let i = 0; i < state.list.length; i++) { 
//       //     if (state.list[i] === action.payload) {
//       //       temp = temp + 1;
//       //     }
//       //   }
//       //    if (temp === 0) {
//       //      return {
//       //        ...state,
//       //        list: [...state.list, action.payload]
//       //      }
//       //    }
//       //    else {
//       //      return {
//       //        ...state,
//       //      }
//       //    }
//       // }
    
//     case actionTypes.DELETE: 
//       return {
//       ...state
//       // messages: state.messages.filter(
//       //   message => message.timestamp !== action.meta.timestamp
//       // )
//     }
//       // const oldList = [...state.list];
//       // if (oldList.length === 1) {
//       //   oldList.splice(action.payload, 1);
//       //   const newList = oldList;
//       //   return {
//       //     ...state,
//       //     list: newList
//       //   };
//       // }
//       // else
//       // {
//       //   // tslint:disable-next-line
//       //   for (let i = 0; i < oldList.length; i++) {
//       //     /* tslint:disable-next-line */ // @ts-ignore
//       //     if (oldList[i].symbol === action.payload) {
//       //     /* tslint:disable-next-line */ // @ts-ignore
//       //       console.log('1st' + oldList.splice(i, 1)[0].symbol)
//       //       /* tslint:disable-next-line */ // @ts-ignore
//       //       console.log('2nd'+oldList.splice(i,1).symbol)
//       //       oldList.splice(i,0);
//       //     }
//       //   }
//       //   // tslint:disable-next-line
//       //   for (let i = 0; i < oldList.length; i++) {
//       //     /* tslint:disable-next-line */ // @ts-ignore
//       //     console.log('3rd'+oldList[i].symbol)
//       //   }
//       //   return {
//       //     ...state,
//       //       list: oldList
//       //     };
//       //   }
      
//       default:
//         return state;
//   }
// };















// // import {IStockListState, StockListAction,IStockItemList, IStockItem, ADD_STOCK } from '../types';

// // const initialState: IStockListState = {
// //   lists: { },
// //   listIdToDelete: '',
// //   listToEdit: null,
// //   listById: null,
// //   selectedList: null,
// //   taskToDelete:  null,
// //   taskToEdit: null,
// // }

// // // Helper Function

// // const getListFromLS = (): IStockItemList => {
// //   if (localStorage.getItem('stock_list')) {
// //     return JSON.parse(localStorage.getItem('stock_list') || '{}');
// //   }
// //   return {};
// // }

// // const saveStockListToLS = (stockList: IStockItemList) => {
// //   localStorage.setItem('stocK_list', JSON.stringify(stockList));
// // }

// // export default (state = initialState, action: StockListAction): IStockListState => {
// //   const listsFromLS = getListFromLS();
  
// //   switch (action.type) {
// //     case ADD_STOCK:
// //       const clonedListsFromLS = { ...listsFromLS };
// //       clonedListsFromLS[action.payload.symbol] = action.payload;
    
// //     default:
// //       return state;
// //   }
// // }