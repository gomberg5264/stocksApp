import React,{FC, useState} from 'react'
import { IUsers,IStock } from '../types/type';
import nse from '../../icons/nse.jpg';
// import { motion } from 'framer-motion';
import {NiftyModal } from '../UI/Modal';
import StockItem from './StockItem';

interface IStocksProps {
  users: IUsers
}

const Stocks: FC<IStocksProps> = ({ users }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(users.data.map((item: any)  => item));
  return (
    <div className="stocks">
      <div className="nifty__cont">
        <div className="nifty__cont-1">
          <img src={nse} alt="NSE" className="nifty__cont-1__img"/>
          <h1 className="nifty__cont-1__title">
            NIFTY 50
          </h1>
          <div className="nifty__cont-1__ticker">
            {users.latestData[0].ch > 0 ?  
              <>
                <div className="nifty__cont-1__ticker__ch">
                  <p style={{color: 'green', rotate: '180deg'}} >
                    &#9650;
                  </p>
                  <p style={{color: 'green'}} >
                    {users.latestData[0].ch}
                  </p>
                </div>
                <p style={{color: 'green'}} className="nifty__cont-1__ticker__per">
                  ({users.latestData[0].per}%)
                </p> 
              </>
              :
              <>
                <div className="nifty__cont-1__ticker__ch">
                  <p style={{color: 'red', rotate: '90deg'}}  >
                    &#9650;
                  </p>
                  <p style={{color: 'red'}}  >
                    {users.latestData[0].ch}
                  </p>
                </div>
                <p style={{color: 'red'}}  className="nifty__cont-1__ticker__per">
                  ({users.latestData[0].per}%)
                </p>
              </>
            }
          </div>
        </div>
        <div className="nifty__cont-2">
          <p className="nifty__cont-2__ltp">
            {users.latestData[0].ltp}
          </p>
          <p className="nifty__cont-2__time">
          Last Updated: {users.time}
          </p>
        </div>
        <div className="nifty__cont__btnCont">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="nifty__cont__btnCont__btn"
          >
             <defs>
              <filter id="id-of-your-filter">
                <feColorMatrix
                  color-interpolation-filters="sRGB"
                  type="matrix"
                  values="0 0 0 0 0
                          0 0.50 0 0 0
                          0 0 0.50 0 0
                          0 0 0 1 0 "/>
              </filter>
              ...
            </defs>
            <path
              fill="currentColor"
              stroke="#fff"
              fill-rule="nonzero"
              d="M7.91012437,3.00805567 L8,3 C8.24545989,3 8.44960837,3.17687516 8.49194433,3.41012437 L8.5,3.5 L8.5,7.5 L12.5,7.5 C12.7454599,7.5 12.9496084,7.67687516 12.9919443,7.91012437 L13,8 C13,8.24545989 12.8231248,8.44960837 12.5898756,8.49194433 L12.5,8.5 L8.5,8.5 L8.5,12.5 C8.5,12.7454599 8.32312484,12.9496084 8.08987563,12.9919443 L8,13 C7.75454011,13 7.55039163,12.8231248 7.50805567,12.5898756 L7.5,12.5 L7.5,8.5 L3.5,8.5 C3.25454011,8.5 3.05039163,8.32312484 3.00805567,8.08987563 L3,8 C3,7.75454011 3.17687516,7.55039163 3.41012437,7.50805567 L3.5,7.5 L7.5,7.5 L7.5,3.5 C7.5,3.25454011 7.67687516,3.05039163 7.91012437,3.00805567 L8,3 L7.91012437,3.00805567 Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="nifty__cont__btnCont__btn"
          >
            <defs>
              <filter id="id-of-your-filter">
                <feColorMatrix
                  color-interpolation-filters="sRGB"
                  type="matrix"
                  values="0 0 0 0 0
                          0 0.50 0 0 0
                          0 0 0.50 0 0
                          0 0 0 1 0 "/>
              </filter>
              ...
            </defs>
            <path
              fill="none"
              // stroke="#fff"
              d="M0 0h24v24H0V0z"
            />
            <path
              fill="#fff"
              // stroke="#fff"
              d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            className="nifty__cont__btnCont__btn"
            onClick={() => setShowModal(prevValue => !prevValue)}
            // onClick={() => setShowModal(true)}
            >
              <defs>
                <filter id="id-of-your-filter">
                  <feColorMatrix
                    color-interpolation-filters="sRGB"
                    type="matrix"
                    values="0 0 0 0 0
                            0 0.50 0 0 0
                            0 0 0.50 0 0
                            0 0 0 1 0 "/>
                </filter>
                ...
              </defs>
            <path
              // fill="currentColor"
              fill="#fff"
              d="M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"
            />
          </svg>
        </div>
        <NiftyModal users={users}  showModal={showModal} setShowModal={setShowModal} />
      </div>
      <div className="stocks__cont">
        {users.data.map((data: IStock,key:number) => <StockItem data={data} key={key}/>
        )}
      </div>
    </div>
    );
}

export default Stocks;