import React, {FC} from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface IPrivateRouteProps extends RouteProps {
  component: any;
  showModal: any;
  setShowModal: any;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ component: Component,showModal, setShowModal, ...rest}) => {
  const { authenticated } =  useSelector((state: RootState) => state.auth);
  
  return (
    <Route {...rest} render={props => authenticated ? <Component {...props} showModal={showModal} setShowModal={setShowModal} /> : <Redirect to='/signin'/>}/>
    );
}
