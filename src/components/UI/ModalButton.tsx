import React,{FC,useState} from 'react'
import { NiftyModal, StockItemModal } from '../UI/Modal';
import { IUsers, IStock } from '../types/type';
import { useDispatch } from 'react-redux';
import { addList, deleteList } from '../../store/actions/listAction';
import { add,del } from '../../store/reducers/newListReducer';
interface INiftyModalButtonProps {
  users: IUsers;
}

interface IStockItemModalButtonProps {
  data: IStock;
}

interface IPortfolioStockModalButtonProps {
  data: IStock;
  symbol: string;
}

export const PortfolioStockModalButton: FC<IPortfolioStockModalButtonProps> = ({data,symbol}) => {
  const [showStockModal, setStockShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  
  return (
    <React.Fragment>
      <div className="stocks__btnCont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="stocks__btnCont__btn"
          onClick={() => dispatch(addList(data))}
        >
          <defs>
            <filter id="id-of-your-filter">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0 0 0 0 0
                0 0.50 0 0 0
                0 0  0 0
                0 0 0 1 0 "
              />
            </filter>
            ...
          </defs>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M7.91012437,3.00805567 L8,3 C8.24545989,3 8.44960837,3.17687516 8.49194433,3.41012437 L8.5,3.5 L8.5,7.5 L12.5,7.5 C12.7454599,7.5 12.9496084,7.67687516 12.9919443,7.91012437 L13,8 C13,8.24545989 12.8231248,8.44960837 12.5898756,8.49194433 L12.5,8.5 L8.5,8.5 L8.5,12.5 C8.5,12.7454599 8.32312484,12.9496084 8.08987563,12.9919443 L8,13 C7.75454011,13 7.55039163,12.8231248 7.50805567,12.5898756 L7.5,12.5 L7.5,8.5 L3.5,8.5 C3.25454011,8.5 3.05039163,8.32312484 3.00805567,8.08987563 L3,8 C3,7.75454011 3.17687516,7.55039163 3.41012437,7.50805567 L3.5,7.5 L7.5,7.5 L7.5,3.5 C7.5,3.25454011 7.67687516,3.05039163 7.91012437,3.00805567 L8,3 L7.91012437,3.00805567 Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="stocks__btnCont__btn"
          onClick={() => dispatch(deleteList(symbol))}
        >
          <defs>
            <filter id="id-of-your-filter">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0 0 0 0 0
                0 0.50 0 0 0
                0 0  0 0
                0 0 0 1 0 "/>
            </filter>
            ...
          </defs>
          <path
            fill="none"
            d="M0 0h24v24H0V0z"
          />
          <path
            fill="currentColor"
            d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          className="stocks__btnCont__btn"
          onClick={() => setStockShowModal(prevValue => !prevValue)}     
          >
            <defs>
              <filter id="id-of-your-filter">
                <feColorMatrix
                  colorInterpolationFilters="sRGB"
                  type="matrix"
                  values="0 0 0 0 0
                  0 0.50 0 0 0
                  0 0  0 0
                  0 0 0 1 0 "/>
              </filter>
              ...
            </defs>
          <path

            fill="#fff"
            d="M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"
          />
        </svg>
      </div>
    <StockItemModal data={data}  showStockModal={showStockModal} setStockShowModal={setStockShowModal} />
  </React.Fragment>
);
}

export const StockItemModalButton: FC<IStockItemModalButtonProps> = ({data}) => {
  const [showStockModal, setStockShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  // console.log("data"+data);
  return (
    <React.Fragment>
      <div className="stocks__btnCont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="stocks__btnCont__btn"
          onClick={() => dispatch(add(data))}
        >
          <defs>
            <filter id="id-of-your-filter">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0 0 0 0 0
                0 0.50 0 0 0
                0 0  0 0
                0 0 0 1 0 "/>
            </filter>
            ...
          </defs>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M7.91012437,3.00805567 L8,3 C8.24545989,3 8.44960837,3.17687516 8.49194433,3.41012437 L8.5,3.5 L8.5,7.5 L12.5,7.5 C12.7454599,7.5 12.9496084,7.67687516 12.9919443,7.91012437 L13,8 C13,8.24545989 12.8231248,8.44960837 12.5898756,8.49194433 L12.5,8.5 L8.5,8.5 L8.5,12.5 C8.5,12.7454599 8.32312484,12.9496084 8.08987563,12.9919443 L8,13 C7.75454011,13 7.55039163,12.8231248 7.50805567,12.5898756 L7.5,12.5 L7.5,8.5 L3.5,8.5 C3.25454011,8.5 3.05039163,8.32312484 3.00805567,8.08987563 L3,8 C3,7.75454011 3.17687516,7.55039163 3.41012437,7.50805567 L3.5,7.5 L7.5,7.5 L7.5,3.5 C7.5,3.25454011 7.67687516,3.05039163 7.91012437,3.00805567 L8,3 L7.91012437,3.00805567 Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="stocks__btnCont__btn"
          onClick={ () =>  dispatch(del(data.symbol))}
        >
          <defs>
            <filter id="id-of-your-filter">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0 0 0 0 0
                        0 0.50 0 0 0
                        0 0  0 0
                        0 0 0 1 0 "/>
            </filter>
            ...
          </defs>
          <path
            fill="none"
            d="M0 0h24v24H0V0z"
          />
          <path
            fill="currentColor"
            d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          className="stocks__btnCont__btn"
          onClick={() => setStockShowModal(prevValue => !prevValue)}
          >
            <defs>
              <filter id="id-of-your-filter">
                <feColorMatrix
                  colorInterpolationFilters="sRGB"
                  type="matrix"
                  values="0 0 0 0 0
                  0 0.50 0 0 0
                  0 0  0 0
                  0 0 0 1 0 "/>
              </filter>
              ...
            </defs>
          <path
             fill="currentColor"

            d="M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"
          />
        </svg>
      </div>
    <StockItemModal data={data}  showStockModal={showStockModal} setStockShowModal={setStockShowModal} />
  </React.Fragment>
);
}

export const NiftyModalButton: FC<INiftyModalButtonProps> = ({users}) => {
  const [showNiftyModal, setNiftyShowModal] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className="stocks__btnCont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          className="stocks__btnCont__btn"
          onClick={() => setNiftyShowModal(prevValue => !prevValue)}
          >
            <defs>
              <filter id="id-of-your-filter">
                <feColorMatrix
                  colorInterpolationFilters="sRGB"
                  type="matrix"
                  values="0 0 0 0 0
                  0 0.50 0 0 0
                  0 0  0 0
                  0 0 0 1 0 "/>
              </filter>
              ...
            </defs>
          <path
            fill="currentColor"
            d="M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z"
          />
        </svg>
      </div>
      <NiftyModal users={users}  showNiftyModal={showNiftyModal} setNiftyShowModal={setNiftyShowModal} />
    </React.Fragment>
);
}


// const MapStateToProps = (state: ReducerState) => {
//   return {
//     list: state.list.list
//   };
// };

// const MapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
//   addToDo: (item: any) => dispatch({ type: actionTypes.ADD, payload: item }),
//   deleteToDo: (idx: number) => dispatch({ type: actionTypes.DELETE, payload: idx })
// });

// export default connect(
//   MapStateToProps,
//   MapDispatchToProps
// )(StockItemModalButton);