import React,{FC} from 'react'
import { IUsers,IUserData } from '../types/type';
import { useSelector } from 'react-redux';
import { ReducerState } from '../../store/reducers/listReducer';
import ListItem from './ListItem';
import { IList } from '../types/type';

interface IPortfolioProps {
  users: IUsers;
  user: IUserData;
}

const Portfolio: FC<IPortfolioProps> = ({ user }) => {
  // const [stockList, setStockList] = useState<any>('');
  const { list } = useSelector((state: ReducerState) => state.list);
  
  return (
    <>
      {list.length > 0 ? 
        <div className="pf__cont">
        <p className="pf__cont__secA">
          <h1> {user.firstName}, Welcome to StockFolio!</h1>
        </p>
          <div className="pf__cont__secB">
            
            {list.map((list: IList, key: number) => <ListItem list={list} key={key} />
        )}
          </div>
        </div>
        :
        <div className="pf__cont">
          <p className="pf__cont__secA">
          <h1> {user.firstName}, Welcome to StockFolio!</h1>
        </p>
          <div className="pf__cont__secB">
              <span>
                  You do not own any stocks on our
                  platform. To start your portfolio add upto 10 stocks according 
                  to your interest!
              </span>
          </div>
        </div>
      }
    </>
  );
}

export default Portfolio;