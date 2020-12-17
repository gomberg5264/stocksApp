import React,{FC} from 'react'
import { IStock } from '../types/type';
import {StockItemModalButton} from '../UI/ModalButton';

interface IStockItemProps {
  data: IStock;
  key: number
}

const StockItem: FC<IStockItemProps> = ({ data, key }) => {
  return (
    <div className="stockItem__cont">
      <div className="stockItem__cont-1">
        <p className="stockItem__cont-1__secA">
          {data.symbol}
        </p>
        <div className="stockItem__cont-1__secB">
          <p className="stockItem__cont-1__secB-1">
            {data.dayEndClose === undefined ?
              `Previous Close: ${data.dayEndClose}` :
              `Previous Close : N/A`
            }
          </p>
          <p className="stockItem__cont-1__secB-2">
            Open: {data.open}
          </p>
        </div>
        <div className="stockItem__cont-1__secC">
            { data.ptsC > 0 ?  
              <>
                <div className="stockItem__cont-1__secC__pts">
                  <p className="triangle--green" >
                    &#9650;
                  </p>
                  <p style={{color: 'green'}} >
                    {data.ptsC}
                  </p>
                </div>
                <p style={{color: 'green'}} className="stockItem__cont-1__secC__per">
                  ({data.per}%)
                </p> 
              </>
              :
              <>
                 <div className="stockItem__cont-1__secC__pts">
                  <p className="triangle--red"  >
                    &#9650;
                  </p>
                  <p style={{color: 'red'}}  >
                    {data.ptsC}
                  </p>
                </div>
                <p style={{color: 'red'}}  className="stockItem__cont-1__secC__per">
                  ({data.per}%)
                </p>
              </>
            }
        </div>
      </div>
      <div className="stockItem__cont-2">
        <p className="stockItem__cont-2__secA">
          {data.ltP}
        </p>
        <div className="stockItem__cont-2__secB">
          {data.yPC > 0 ?
            <p>52 weeks return : <span style={{color: 'green'}}>{ data.yPC}</span></p>
            :
            <p>52 weeks return : <span style={{color: 'red'}}>{ data.yPC}</span></p>
          }
        </div>
      </div>
      <StockItemModalButton data={data} />
    </div>
  );
}

export default StockItem;