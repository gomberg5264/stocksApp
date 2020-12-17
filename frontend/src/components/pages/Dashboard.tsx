import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { IUsers } from '../types/type';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import { SignInModal } from '../UI/Modal';
import Stocks from '../sections/Stocks';
import Portfolio from '../sections/Portfolio';

export const Dashboard: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(true);
  const [users, setUserList] = useState<IUsers>(undefined);

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  useLayoutEffect(() => {
    axios.get('http://localhost:4000/nse/get_index_stocks?symbol=nifty', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setUserList(response.data);
      });
  }, []);

  if (users !== undefined) {
    console.log(user);
  }
  ;

  return (
    <>
      {needVerification && <SignInModal showModal={showModal} setShowModal={setShowModal} />}
      <div className="db">
        <div className="db__cont-1">
          {users && <Stocks users={users} />}
        </div>
        <div className="db__cont-2">
          <Portfolio users={users} user={user} />
        </div>
      </div>
    </>
  );
}