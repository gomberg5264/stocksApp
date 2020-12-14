import React,{FC} from 'react'
import { IStock } from '../types/type';
import {StockItemModalButton} from '../UI/ModalButton';
import { IList } from '../types/type';

interface IStockItemProps {
  list: IList;
  key: number
}

const ListItem: FC<IStockItemProps> = ({ list,key }) => {
  return (
    <div className="stockItem__cont">
      <div className="stockItem__cont-1">
        <p className="stockItem__cont-1__secA">
          {list.symbol}
        </p>
        <div className="stockItem__cont-1__secB">
          <p className="stockItem__cont-1__secB-1">
            {list.dayEndClose === undefined ?
              `Previous Close: ${list.dayEndClose}` :
              `Previous Close : N/A`
            }
            
          </p>
          <p className="stockItem__cont-1__secB-2">
            Open: {list.open}
          </p>
        </div>
        <div className="stockItem__cont-1__secC">
            { list.ptsC > 0 ?  
              <>
                <div className="stockItem__cont-1__secC__pts">
                  <p className="triangle--green" >
                    &#9650;
                  </p>
                  <p style={{color: 'green'}} >
                    {list.ptsC}
                  </p>
                </div>
                <p style={{color: 'green'}} className="stockItem__cont-1__secC__per">
                  ({list.per}%)
                </p> 
              </>
              :
              <>
                 <div className="stockItem__cont-1__secC__pts">
                  <p className="triangle--red"  >
                    &#9650;
                  </p>
                  <p style={{color: 'red'}}  >
                    {list.ptsC}
                  </p>
                </div>
                <p style={{color: 'red'}}  className="stockItem__cont-1__secC__per">
                  ({list.per}%)
                </p>
              </>
            }
        </div>
      </div>
      <div className="stockItem__cont-2">
        <p className="stockItem__cont-2__secA">
          {list.ltP}
        </p>
        <p className="stockItem__cont-2__secB">
          {list.yPC > 0 ?
            <p>52 weeks return : <span style={{color: 'green'}}>{ list.yPC}</span></p>
            :
            <p>52 weeks return : <span style={{color: 'red'}}>{ list.yPC}</span></p>
          }
          </p>
      </div>
      <StockItemModalButton data={list} key={ key}/>
    </div>
  );
}

export default ListItem;