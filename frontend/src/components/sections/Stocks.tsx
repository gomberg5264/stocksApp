import React,{FC} from 'react'
import { IUsers,IStock } from '../types/type';
import nse from '../../icons/nse.jpg';
// import { motion } from 'framer-motion';
import StockItem from './StockItem';
import {NiftyModalButton} from '../UI/ModalButton';

interface IStocksProps {
  users: IUsers
}

const Stocks: FC<IStocksProps> = ({ users }) => {

  // console.log(users.data.map((item: any)  => item));
  return (
    <div className="stocks">
      <div className="stocks__nifty__cont">
        <div className="stocks__nifty__cont-1">
          <img src={nse} alt="NSE" className="stocks__nifty__cont-1__img"/>
          <h1 className="stocks__nifty__cont-1__title">
            NIFTY 50
          </h1>
          <div className="stocks__nifty__cont-1__ticker">
            {users.latestData[0].ch > 0 ?  
              <>
                <div className="stocks__nifty__cont-1__ticker__ch">
                <p className="triangle--green" >
                    &#9650;
                  </p>
                  <p style={{color: 'green'}} >
                    {users.latestData[0].ch}
                  </p>
                </div>
                <p style={{color: 'green'}} className="stocks__nifty__cont-1__ticker__per">
                  ({users.latestData[0].per}%)
                </p> 
              </>
              :
              <>
                <div className="stocks__nifty__cont-1__ticker__ch">
                  <p className="triangle--red">
                    &#9650;
                  </p>
                  <p style={{color: 'red'}}  >
                    {users.latestData[0].ch}
                  </p>
                </div>
                <p style={{color: 'red'}}  className="stocks__nifty__cont-1__ticker__per">
                  ({users.latestData[0].per}%)
                </p>
              </>
            }
          </div>
        </div>
        <div className="stocks__nifty__cont-2">
          <p className="stocks__nifty__cont-2__ltp">
            {users.latestData[0].ltp}
          </p>
          <p className="stocks__nifty__cont-2__time">
          Last Updated: {users.time}
          </p>
        </div>
        <NiftyModalButton users={users}/>
      </div>
      <div className="stocks__stockItem__cont">
        {users.data.map((data: IStock,key:number) => <StockItem data={data} key={key}/>
        )}
      </div>
      
    </div>
    );
}

export default Stocks;