import React,{FC} from 'react'

interface IStockItemProps {
  data: any;
}

const StockItem: FC<IStockItemProps> = ({ data }) => {
  console.log(data);
  return (
    <>{ }sads</>
    );
}

export default StockItem;