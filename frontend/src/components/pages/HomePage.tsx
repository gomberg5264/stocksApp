import React,{FC} from 'react'
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../UI/Button';
import { RootState } from '../../store';
import { logout } from '../../store/actions/authActions';

export const Homepage: FC = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(logout());
  }

  return (
    <div className="hp__cont"> 
      <motion.h2 className="hp__cont__title-1"
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{type: 'spring', stiffness: 60, delay: 0.5}}
      >
        StockFolio
      </motion.h2>
      <motion.h5 className="hp__cont__title-2"
         initial={{ y: '100vh' }}
         animate={{ y: 0 }}
         transition={{type: 'spring', stiffness: 70, delay: 0.8}}
      >
        Welcome to the stockfolio <br/>
        where you can build your very own <br />
        stock market (mock)  portfolio!
      </motion.h5>
        <motion.div className="hp__cont__btn__cont"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.5}}
        >
        {!authenticated ?
          <div className="">
            <Button text="Sign Up" onClick={ () => history.push('/signup')} className=""/>
            <Button text="Sign In" onClick={ () => history.push('/signin')} className=""/>
          </div>
            :
          <Button text="Sign Out" onClick={ logoutClickHandler } />
        }
        </motion.div>
    </div>
    );
}