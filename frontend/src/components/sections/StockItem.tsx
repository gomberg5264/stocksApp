import React,{FC} from 'react'
import { IStock } from '../types/type';
interface IStockItemProps {
  data: IStock;
}

const StockItem: FC<IStockItemProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="stockItem__cont">
      {data.symbol}
    </div>
    );
}

export default StockItem;