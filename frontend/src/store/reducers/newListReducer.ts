import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface IItem {
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

const listSlice = createSlice({
  name: 'list',
  initialState: [] as any[],
  reducers: {
    add: {
      reducer(state, action: PayloadAction<IItem>) {
        const listItem = action.payload;
        let index = 0;
         /* tslint:disable-next-line */ // @ts-ignore
        if (state.length < 1) {
          state.push(listItem)  
        }
        else {
          /* tslint:disable-next-line */ // @ts-ignore
          for (let i = 0; i < state.length; i++){
            if (state[i].symbol === listItem.symbol) {
              index++;
            }
          }
          if (index === 0) {
            state.push(listItem) 
          }
        }
      },
      prepare(payload: IItem) {
        return {
          payload
        }
      }
    },
    /* tslint:disable-next-line */ // @ts-ignore
    del: {
      reducer(state, action: PayloadAction<any>) {
        const itemToDel = action.payload;
        for (let i = 0; i < state.length; i++) {
          if (state[i].symbol === itemToDel) {
            state.splice(i,1);
          }
        }
      }
    }
  }
})

const { actions, reducer } = listSlice;

export const { add,del } = actions;

export default reducer;