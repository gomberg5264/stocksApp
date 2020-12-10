import React, {FC} from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface IPublicRouteProps extends RouteProps {
  component: any;
}

export const PublicRoute: FC<IPublicRouteProps> = ({ component: Component, ...rest}) => {
  const { authenticated } =  useSelector((state: RootState) => state.auth);
  
  return (
    <Route {...rest} render={props => !authenticated ? <Component {...props} /> : <Redirect to='/dashboard'/>}/>
    );
}

